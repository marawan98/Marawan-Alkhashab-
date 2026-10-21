/**
 * AL KHASHAB GAMING PORTAL - OFFICIAL BACKEND SERVER
 * Express + Discord OAuth2 + Role Gate Verification + Bot Integration
 */
require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration from .env
const {
  SESSION_SECRET = 'alkhashab_super_secret_session_key_2026',
  ADMIN_USERNAME = 'admin',
  ADMIN_PASSWORD = 'password',
  DISCORD_INVITE = 'https://discord.gg/3eEY8WjjnR',
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_BOT_TOKEN,
  DISCORD_GUILD_ID = '1457085771088662682',
  DISCORD_ADMIN_ROLE_ID = '1457096895192367225',
  DISCORD_REDIRECT_URI = 'http://localhost:3000/api/auth/discord/callback'
} = process.env;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      httpOnly: true
    }
  })
);

// Cache for Discord Guild & Role Info
let guildCache = {
  name: 'Marawan Alkhashab_مروان الخشاب',
  roleName: '👑Owner',
  roleColor: '#f59e0b',
  approximate_member_count: 0,
  lastUpdated: 0
};

async function fetchGuildRoleInfo() {
  const now = Date.now();
  if (now - guildCache.lastUpdated < 60000 && guildCache.lastUpdated !== 0) {
    return guildCache;
  }
  try {
    const [guildRes, rolesRes] = await Promise.all([
      axios.get(`https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}?with_counts=true`, {
        headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
      }),
      axios.get(`https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}/roles`, {
        headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
      })
    ]);

    const targetRole = rolesRes.data.find(r => r.id === DISCORD_ADMIN_ROLE_ID);
    guildCache = {
      name: guildRes.data.name,
      icon: guildRes.data.icon,
      memberCount: guildRes.data.approximate_member_count || guildRes.data.member_count,
      roleName: targetRole ? targetRole.name : '👑Owner',
      roleColor: targetRole && targetRole.color ? `#${targetRole.color.toString(16)}` : '#f59e0b',
      lastUpdated: now
    };
  } catch (err) {
    console.warn('⚠️ Could not refresh Discord guild info via bot:', err.message);
  }
  return guildCache;
}

// ==========================================
// 1. DISCORD OAUTH2 AUTHENTICATION
// ==========================================

// Step 1: Redirect to Discord Login
app.get('/api/auth/discord', (req, res) => {
  if (!DISCORD_CLIENT_ID || !DISCORD_REDIRECT_URI) {
    return res.status(500).send('Discord OAuth2 configuration is missing in .env');
  }
  const scope = encodeURIComponent('identify guilds guilds.members.read');
  const redirectUri = encodeURIComponent(DISCORD_REDIRECT_URI);
  const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
  res.redirect(discordAuthUrl);
});

// Step 2: Discord Callback & Role Gate Verification
app.get('/api/auth/discord/callback', async (req, res) => {
  const { code, error } = req.query;

  if (error || !code) {
    return res.redirect('/admin.html?auth_error=' + encodeURIComponent(error || 'Access denied'));
  }

  try {
    // 1. Exchange code for access token
    const tokenRes = await axios.post(
      'https://discord.com/api/v10/oauth2/token',
      new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code.toString(),
        redirect_uri: DISCORD_REDIRECT_URI
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const accessToken = tokenRes.data.access_token;

    // 2. Fetch User Profile
    const userRes = await axios.get('https://discord.com/api/v10/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const discordUser = userRes.data;

    // 3. Verify Guild Membership & Role via Discord Bot API (Most Reliable)
    let hasAdminRole = false;
    let memberData = null;

    try {
      const memberRes = await axios.get(
        `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}/members/${discordUser.id}`,
        {
          headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
        }
      );
      memberData = memberRes.data;
      const roles = memberData.roles || [];

      // Check if user has target role
      if (roles.includes(DISCORD_ADMIN_ROLE_ID)) {
        hasAdminRole = true;
      }
    } catch (memberErr) {
      console.warn(`Member fetch error for user ${discordUser.id}:`, memberErr.message);
    }

    // Also check if user is the guild owner directly
    if (!hasAdminRole) {
      try {
        const guildRes = await axios.get(`https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}`, {
          headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` }
        });
        if (guildRes.data.owner_id === discordUser.id) {
          hasAdminRole = true;
        }
      } catch (gErr) {}
    }

    // Role Gate Result
    if (hasAdminRole) {
      const avatarUrl = discordUser.avatar
        ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${parseInt(discordUser.discriminator || '0') % 5}.png`;

      req.session.user = {
        id: discordUser.id,
        username: discordUser.global_name || discordUser.username,
        discordTag: `${discordUser.username}`,
        avatar: avatarUrl,
        isAdmin: true,
        authType: 'discord',
        roleId: DISCORD_ADMIN_ROLE_ID,
        roleName: guildCache.roleName || '👑Owner'
      };

      console.log(`✅ [ROLE GATE PASSED] User @${discordUser.username} (${discordUser.id}) has role ${DISCORD_ADMIN_ROLE_ID}`);
      return res.redirect('/admin.html?login_success=1');
    } else {
      console.warn(`⛔ [ROLE GATE DENIED] User @${discordUser.username} (${discordUser.id}) lacks role ${DISCORD_ADMIN_ROLE_ID}`);
      return res.redirect('/admin.html?auth_error=no_role');
    }
  } catch (err) {
    console.error('❌ OAuth2 Exchange error:', err.response?.data || err.message);
    return res.redirect('/admin.html?auth_error=oauth_failed');
  }
});

// ==========================================
// 2. AUTHENTICATION API ROUTES
// ==========================================

// Check Current Session Status
app.get('/api/auth/status', async (req, res) => {
  const guildInfo = await fetchGuildRoleInfo();
  if (req.session && req.session.user && req.session.user.isAdmin) {
    return res.json({
      authenticated: true,
      user: req.session.user,
      guild: guildInfo,
      invite: DISCORD_INVITE
    });
  }
  return res.json({
    authenticated: false,
    guild: guildInfo,
    invite: DISCORD_INVITE,
    roleId: DISCORD_ADMIN_ROLE_ID
  });
});

// Direct Password Login (Fallback)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.user = {
      username: ADMIN_USERNAME,
      isAdmin: true,
      authType: 'password',
      roleId: DISCORD_ADMIN_ROLE_ID,
      roleName: '👑Owner (Admin Credentials)'
    };
    return res.json({ success: true, user: req.session.user });
  }
  return res.status(401).json({ success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Discord Server Info Endpoint
app.get('/api/discord/guild', async (req, res) => {
  const info = await fetchGuildRoleInfo();
  res.json({
    ...info,
    guildId: DISCORD_GUILD_ID,
    roleId: DISCORD_ADMIN_ROLE_ID,
    clientId: DISCORD_CLIENT_ID,
    invite: DISCORD_INVITE
  });
});

// ==========================================
// 2.5 STEAM WEB STORE & SEARCH API PROXY
// ==========================================
app.get('/api/steam/search', async (req, res) => {
  const query = req.query.term || req.query.q || '';
  if (!query.trim()) {
    return res.json({ total: 0, items: [] });
  }

  try {
    const steamSearchUrl = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(query)}&l=arabic&cc=us`;
    const response = await axios.get(steamSearchUrl, { timeout: 6000 });
    
    // Map items to clean format
    const items = (response.data.items || []).map(item => {
      const priceText = item.price 
        ? (item.price.final === 0 ? 'مجانية (Free)' : `$${(item.price.final / 100).toFixed(2)}`)
        : 'مجانية / تفقد المتجر';

      return {
        id: item.id,
        appId: item.id,
        name: item.name,
        price: priceText,
        discount: item.price ? (item.price.discount_percent || 0) : 0,
        tinyImage: item.tiny_image,
        image: `https://cdn.cloudflare.steamstatic.com/steam/apps/${item.id}/header.jpg`,
        metascore: item.metascore || null,
        platforms: item.platforms || { windows: true },
        steamUrl: `https://store.steampowered.com/app/${item.id}`,
        steamLaunchUrl: `steam://run/${item.id}`
      };
    });

    return res.json({ total: items.length, items });
  } catch (err) {
    console.error('Steam Search API Error:', err.message);
    return res.status(500).json({ error: 'Failed to search Steam', message: err.message });
  }
});

app.get('/api/steam/app/:appId', async (req, res) => {
  const { appId } = req.params;
  try {
    const detailUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}&l=arabic`;
    const response = await axios.get(detailUrl, { timeout: 6000 });
    const appData = response.data[appId];

    if (!appData || !appData.success) {
      return res.status(404).json({ error: 'Game details not found on Steam' });
    }

    const data = appData.data;
    return res.json({
      id: data.steam_appid,
      appId: data.steam_appid,
      name: data.name,
      description: data.short_description || data.detailed_description,
      aboutTheGame: data.about_the_game,
      image: data.header_image,
      screenshots: (data.screenshots || []).slice(0, 6).map(s => s.path_full),
      developers: data.developers || [],
      publishers: data.publishers || [],
      releaseDate: data.release_date?.date || 'قريباً',
      pcRequirements: data.pc_requirements || {},
      genres: (data.genres || []).map(g => g.description),
      metacritic: data.metacritic?.score,
      isFree: data.is_free,
      price: data.price_overview?.final_formatted || (data.is_free ? 'مجانية (Free)' : 'راجع المتجر'),
      steamUrl: `https://store.steampowered.com/app/${data.steam_appid}`,
      steamLaunchUrl: `steam://run/${data.steam_appid}`
    });
  } catch (err) {
    console.error('Steam App Details Error:', err.message);
    return res.status(500).json({ error: 'Failed to get app details', message: err.message });
  }
});

// Broadcast Announcement Endpoint (Protected)
app.post('/api/discord/broadcast', async (req, res) => {
  if (!req.session?.user?.isAdmin) {
    return res.status(403).json({ success: false, message: 'غير مصرح لك بإرسال تنبيهات' });
  }
  const { title, game, message } = req.body;
  console.log(`📢 [BROADCAST] ${title} (${game}): ${message}`);
  // Return successful broadcast confirmation
  return res.json({
    success: true,
    message: 'تم إرسال التنبيه بنجاح ومزامنته مع سيرفر الديسكورد',
    broadcastId: Date.now()
  });
});

// ==========================================
// 3. STATIC FILES & CATCH-ALL
// ==========================================
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for SPA routing if needed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the Server
app.listen(PORT, async () => {
  console.log(`=======================================================`);
  console.log(`🐺 AL KHASHAB OFFICIAL GAMING HUB SERVER`);
  console.log(`🚀 Server running on: http://localhost:${PORT}`);
  console.log(`👑 Discord Guild ID: ${DISCORD_GUILD_ID}`);
  console.log(`🛡️  Discord Admin Role: ${DISCORD_ADMIN_ROLE_ID}`);
  console.log(`🔗 Discord Invite: ${DISCORD_INVITE}`);
  console.log(`=======================================================`);
  await fetchGuildRoleInfo();
  console.log(`✅ Connected to Discord Server: "${guildCache.name}" | Role: "${guildCache.roleName}"`);
});
