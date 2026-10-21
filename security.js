/**
 * AL KHASHAB CYBER SECURITY - RED SCREEN EMERGENCY SHIELD
 * Triggers a FULL RED SCREEN with "بطل لعب يا حبيبي 😉" when F12 or DevTools is accessed.
 */
(function() {
  'use strict';

  // Sound Warning: Intense Emergency Police/Cyber Siren (Web Audio API)
  function playRedAlertSiren() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      // Emergency alternating frequency siren
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.linearRampToValueAtTime(950, now + 0.15);
      osc.frequency.linearRampToValueAtTime(550, now + 0.32);
      osc.frequency.linearRampToValueAtTime(950, now + 0.48);
      osc.frequency.linearRampToValueAtTime(400, now + 0.65);

      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.72);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.75);
    } catch (e) {}
  }

  // Inject Styles for Full Red Screen
  function injectRedScreenStyles() {
    if (document.getElementById('alkhashab-redscreen-styles')) return;
    const style = document.createElement('style');
    style.id = 'alkhashab-redscreen-styles';
    style.textContent = `
      /* FULL RED SCREEN OVERLAY */
      .alkhashab-red-screen {
        position: fixed !important;
        inset: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 2147483647 !important; /* Highest possible layer in browser */
        background: radial-gradient(circle at center, rgba(220, 20, 60, 0.98) 0%, rgba(139, 0, 0, 0.99) 55%, rgba(40, 0, 0, 1) 100%) !important;
        box-shadow: inset 0 0 150px rgba(255, 0, 0, 0.9), inset 0 0 300px rgba(0, 0, 0, 0.95) !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        direction: rtl !important;
        font-family: 'Cairo', system-ui, -apple-system, sans-serif !important;
        padding: 20px !important;
        text-align: center !important;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
      }

      .alkhashab-red-screen.active {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: all !important;
        animation: redAlertPulse 1.1s infinite alternate !important;
      }

      @keyframes redAlertPulse {
        0% {
          background: radial-gradient(circle at center, rgba(200, 15, 45, 0.98) 0%, rgba(120, 0, 0, 0.99) 55%, rgba(35, 0, 0, 1) 100%);
          box-shadow: inset 0 0 120px rgba(255, 0, 0, 0.8), inset 0 0 250px rgba(0, 0, 0, 0.95);
        }
        100% {
          background: radial-gradient(circle at center, rgba(255, 20, 60, 1) 0%, rgba(160, 0, 0, 0.99) 55%, rgba(60, 0, 0, 1) 100%);
          box-shadow: inset 0 0 200px rgba(255, 30, 30, 1), inset 0 0 350px rgba(0, 0, 0, 0.98);
        }
      }

      .alkhashab-red-card {
        max-width: 600px;
        width: 100%;
        background: rgba(18, 2, 6, 0.92);
        border: 3px solid #ff2222;
        border-radius: 28px;
        padding: 45px 32px;
        box-shadow: 0 0 70px rgba(255, 0, 0, 0.75), inset 0 0 30px rgba(255, 0, 0, 0.25);
        animation: cardPopIn 0.35s ease-out;
        position: relative;
      }

      @keyframes cardPopIn {
        0% { transform: scale(0.85); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }

      .alkhashab-red-wolf-icon {
        width: 90px;
        height: 90px;
        margin: 0 auto 20px;
        background: radial-gradient(circle, #ff1e1e 0%, #880000 100%);
        border: 3px solid #ff9999;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 46px;
        box-shadow: 0 0 40px rgba(255, 0, 0, 0.9);
        animation: sirenWiggle 1.4s infinite alternate ease-in-out;
      }

      @keyframes sirenWiggle {
        0% { transform: scale(1) rotate(-8deg); }
        100% { transform: scale(1.1) rotate(8deg); }
      }

      .alkhashab-red-title {
        font-size: 2.5rem;
        font-weight: 900;
        color: #ffffff;
        text-shadow: 0 0 25px #ff0000, 0 0 45px #ff2222;
        margin-bottom: 12px;
        line-height: 1.2;
      }

      .alkhashab-red-badge {
        display: inline-block;
        background: #ff1111;
        color: #ffffff;
        padding: 7px 22px;
        border-radius: 999px;
        font-weight: 800;
        font-size: 0.95rem;
        box-shadow: 0 0 25px rgba(255, 0, 0, 0.85);
        margin-bottom: 20px;
        letter-spacing: 0.5px;
      }

      .alkhashab-red-desc {
        font-size: 1.18rem;
        font-weight: 700;
        color: #ffe4e6;
        line-height: 1.7;
        margin-bottom: 24px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      }

      .alkhashab-red-action-btn {
        background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
        color: #ffffff;
        border: 2px solid #fca5a5;
        padding: 13px 36px;
        border-radius: 14px;
        font-size: 1.08rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 0 25px rgba(239, 68, 68, 0.65);
        font-family: inherit;
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .alkhashab-red-action-btn:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 0 40px rgba(255, 0, 0, 0.95);
        background: #ff1111;
      }

      .alkhashab-red-locked-msg {
        display: none;
        color: #fca5a5;
        font-size: 0.95rem;
        font-weight: 700;
        margin-top: 15px;
        animation: textBlink 1s infinite alternate;
      }

      @keyframes textBlink {
        0% { opacity: 0.6; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // Red Screen Overlay DOM Element Generator
  let redScreenEl = null;
  let autoDismissTimer = null;
  let isDevToolsCurrentlyOpen = false;

  function ensureRedScreenElement() {
    injectRedScreenStyles();
    if (redScreenEl && document.body.contains(redScreenEl)) return redScreenEl;

    redScreenEl = document.getElementById('alkhashab-red-screen');
    if (!redScreenEl) {
      redScreenEl = document.createElement('div');
      redScreenEl.id = 'alkhashab-red-screen';
      redScreenEl.className = 'alkhashab-red-screen';
      redScreenEl.innerHTML = `
        <div class="alkhashab-red-card">
          <div class="alkhashab-red-wolf-icon">🚨</div>
          <h1 class="alkhashab-red-title">بطل لعب يا حبيبي 😉</h1>
          <div class="alkhashab-red-badge" id="alkhashab-red-reason">⛔ تم محاولة فتح F12 / فحص الموقع</div>
          <p class="alkhashab-red-desc" id="alkhashab-red-desc">
            ممنوع فحص أو سرقة السورس كود الخاص بموقع <strong>Al Khashab Gaming</strong>.<br>
            الموقع محمي بنظام أمني عالي التشفير 🐺
          </p>
          <button class="alkhashab-red-action-btn" id="alkhashab-red-dismiss-btn">
            <span>🎮 فهمت.. رجعني للموقع</span>
          </button>
          <div class="alkhashab-red-locked-msg" id="alkhashab-red-locked-note">
            ⚠️ لن تختفي الشاشة الحمراء حتى تقوم بإغلاق نافذة الفحص (F12 / DevTools) نهائياً!
          </div>
        </div>
      `;
      document.body.appendChild(redScreenEl);

      // Dismiss button handler (only dismisses if DevTools is NOT currently open)
      const btn = document.getElementById('alkhashab-red-dismiss-btn');
      if (btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          if (!isDevToolsCurrentlyOpen) {
            hideRedScreen();
          } else {
            playRedAlertSiren();
          }
        });
      }

      // Allow clicking background to close IF DevTools is closed
      redScreenEl.addEventListener('click', function(e) {
        if (e.target === redScreenEl && !isDevToolsCurrentlyOpen) {
          hideRedScreen();
        }
      });
    }
    return redScreenEl;
  }

  // Show Red Screen Function
  function showRedScreen(reasonText, lockedByDevTools) {
    const el = ensureRedScreenElement();
    playRedAlertSiren();

    const reasonEl = document.getElementById('alkhashab-red-reason');
    const dismissBtn = document.getElementById('alkhashab-red-dismiss-btn');
    const lockedNote = document.getElementById('alkhashab-red-locked-note');

    if (reasonEl && reasonText) {
      reasonEl.textContent = reasonText;
    }

    if (lockedByDevTools) {
      isDevToolsCurrentlyOpen = true;
      if (dismissBtn) dismissBtn.style.display = 'none';
      if (lockedNote) lockedNote.style.display = 'block';
    } else {
      if (dismissBtn) dismissBtn.style.display = 'inline-flex';
      if (lockedNote) lockedNote.style.display = 'none';
      
      // Auto-dismiss after 4.5 seconds if F12 was just pressed but devtools didn't open
      clearTimeout(autoDismissTimer);
      autoDismissTimer = setTimeout(() => {
        if (!isDevToolsCurrentlyOpen) {
          hideRedScreen();
        }
      }, 4500);
    }

    el.classList.add('active');
  }

  // Hide Red Screen Function
  function hideRedScreen() {
    clearTimeout(autoDismissTimer);
    if (redScreenEl) {
      redScreenEl.classList.remove('active');
    }
  }

  // 1. F12 & DevTools Shortcuts Blocker
  window.addEventListener('keydown', function(e) {
    // F12 Key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      showRedScreen('⛔ تم الضغط على F12 • ممنوع فحص الموقع!', false);
      return false;
    }

    const ctrlOrMeta = e.ctrlKey || e.metaKey;

    // Ctrl + Shift + I (Inspect)
    // Ctrl + Shift + J (Console)
    // Ctrl + Shift + C (Element Inspector)
    // Ctrl + Shift + K (Firefox Console)
    if (ctrlOrMeta && e.shiftKey) {
      const keyUpper = (e.key || '').toUpperCase();
      if (['I', 'J', 'C', 'K'].includes(keyUpper) || [73, 74, 67, 75].includes(e.keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        showRedScreen('⛔ محاولة فتح أدوات الفحص (Inspect) مرفوضة!', false);
        return false;
      }
    }

    // Ctrl + U (View Source)
    if (ctrlOrMeta && ((e.key || '').toLowerCase() === 'u' || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      showRedScreen('⛔ محاولة عرض السورس كود (View Source) محظورة!', false);
      return false;
    }

    // Ctrl + S (Save Page)
    if (ctrlOrMeta && ((e.key || '').toLowerCase() === 's' || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      showRedScreen('⛔ محاولة حفظ صفحات الموقع محظورة!', false);
      return false;
    }

    // Escape closes the red screen if DevTools is not open
    if (e.key === 'Escape' && !isDevToolsCurrentlyOpen) {
      hideRedScreen();
    }
  }, true);

  // 2. Right-Click (Context Menu) Blocker
  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    showRedScreen('⛔ كليك يمين محظور لحماية الموقع!', false);
    return false;
  }, true);

  // 3. Active DevTools Detection (Forces Persistent Red Screen while open)
  function checkDockedDevTools() {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    return widthDiff || heightDiff;
  }

  // Undocked DevTools regex inspector
  const devtoolsChecker = /./;
  devtoolsChecker.toString = function() {
    showRedScreen('⛔ تم اكتشاف تشغيل أدوات المطور (Developer Tools)!', true);
    return '';
  };

  function checkDevToolsStatus() {
    const isDocked = checkDockedDevTools();

    try {
      console.log('%c', devtoolsChecker);
    } catch(e) {}

    if (isDocked) {
      if (!isDevToolsCurrentlyOpen) {
        showRedScreen('⛔ تم اكتشاف أدوات المطور مفتوحة!', true);
      }
    } else {
      if (isDevToolsCurrentlyOpen) {
        isDevToolsCurrentlyOpen = false;
        hideRedScreen();
      }
    }
  }

  window.addEventListener('resize', checkDevToolsStatus);
  setInterval(checkDevToolsStatus, 600);

  // 4. Console Watermark
  try {
    console.clear();
    console.log(
      '%c🐺 AL KHASHAB SHIELD %c ⛔ بطل لعب يا حبيبي 😉 ',
      'background: #dc2626; color: #fff; font-size: 16px; font-weight: bold; padding: 6px 14px; border-radius: 6px 0 0 6px;',
      'background: #7f1d1d; color: #fff; font-size: 16px; font-weight: bold; padding: 6px 14px; border-radius: 0 6px 6px 0;'
    );
    console.log(
      '%cجميع الحقوق محفوظة © 2026 Al Khashab. محاولات سرقة السورس كود محظورة تماماً!',
      'color: #ef4444; font-size: 13px; font-weight: bold;'
    );
  } catch (e) {}

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureRedScreenElement);
  } else {
    ensureRedScreenElement();
  }
})();
