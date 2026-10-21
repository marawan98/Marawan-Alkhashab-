/**
 * AL KHASHAB - GAMING HUB & PORTAL
 * Interactive JavaScript Engine with Full Arabic/English Bilingual Support
 */

// ==========================================
// 1. GAMES DATABASE (Valorant, GTA, Assassin's Creed)
// ==========================================
const GAMES_DATA = [
  // --- VALORANT ---
  {
    id: "valorant",
    titleAr: "فالورانت",
    titleEn: "VALORANT",
    series: "valorant",
    category: ["valorant", "competitive"],
    year: "2020",
    rating: "9.3",
    developer: "Riot Games",
    genreAr: "تصويب تكتيكي تنافسي 5v5",
    genreEn: "5v5 Character-Based Tactical Shooter",
    image: "assets/games/valorant.jpg",
    badgeTextAr: "إيسبورتس تكتيكي",
    badgeTextEn: "Tactical Esports",
    synopsisAr: "لعبة تصويب تكتيكية تنافسية من منظور الشخص الأول تجمع بين دقة التصويب الواقعية والقدرات السحرية الخارقة للشخصيات (العملاء). اختر وكيلك ونسق مع فريقك في معارك استراتيجية مثيرة للسيطرة على ساحة المعركة ووضع قنبلة السبايك.",
    synopsisEn: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities. Coordinate with your team in high-stakes tactical rounds to plant or defuse the Spike across diverse global maps.",
    cpuMin: "Intel Core 2 Duo E8400 / AMD Athlon 200GE",
    gpuMin: "Intel HD 4000 / AMD Radeon R5 200",
    ramMin: "4 GB",
    cpuRec: "Intel i3-4150 / AMD Ryzen 3 1200",
    gpuRec: "NVIDIA GeForce GT 730 / AMD Radeon R7 240",
    ramRec: "8 GB",
    platforms: ["PC", "PS5", "Xbox"],
    playUrl: "https://playvalorant.com"
  },

  // --- GRAND THEFT AUTO SERIES ---
  {
    id: "gta6",
    titleAr: "جراند ثفت أوتو 6",
    titleEn: "Grand Theft Auto 6",
    series: "gta",
    category: ["gta", "openworld"],
    year: "2025/2026",
    rating: "10",
    developer: "Rockstar Games",
    genreAr: "عالم مفتوح / مغامرات وأكشن",
    genreEn: "Open World / Action-Adventure",
    image: "assets/games/gta6.jpg",
    badgeTextAr: "الأكثر انتظاراً",
    badgeTextEn: "Most Anticipated",
    synopsisAr: "الجزء الأكثر ترقباً في تاريخ صناعة الألعاب، ينقل اللاعبين إلى ولاية ليونيدا الخيالية وشوارع فايس سيتي المشبعة بأنوار النيون مع الثنائي لوسيا وجيسون في قصة حب وجريمة سينمائية ملحمية غير مسبوقة.",
    synopsisEn: "The most anticipated title in gaming history. Journey to the neon-soaked state of Leonida and the vibrant streets of Vice City alongside Lucia and Jason in an unprecedented cinematic crime saga.",
    cpuMin: "Intel Core i7-8700K / AMD Ryzen 7 3700X (Expected)",
    gpuMin: "NVIDIA RTX 2070 / AMD Radeon RX 5700 XT",
    ramMin: "16 GB",
    cpuRec: "Intel Core i9-13900K / Ryzen 7 7800X3D",
    gpuRec: "NVIDIA GeForce RTX 4080 / AMD RX 7900 XTX",
    ramRec: "32 GB",
    platforms: ["PS5", "Xbox", "PC"],
    playUrl: "https://www.rockstargames.com/VI"
  },
  {
    id: "gtav",
    titleAr: "جراند ثفت أوتو 5 وأونلاين",
    titleEn: "Grand Theft Auto V & Online",
    series: "gta",
    category: ["gta", "openworld"],
    year: "2013 - 2024",
    rating: "9.8",
    developer: "Rockstar Games",
    genreAr: "عالم مفتوح / سطوات وجريمة",
    genreEn: "Open World / Action & Heists",
    image: "assets/games/gtav.jpg",
    badgeTextAr: "أسطورة الجيل",
    badgeTextEn: "Legendary Blockbuster",
    synopsisAr: "ملحمة لوس سانتوس ومقاطعة بلين الخالدة مع الثلاثي الأسطوري مايكل وترفور وفرانكلين. بالإضافة إلى عالم GTA Online الضخم والمتجدد باستمرار بأضخم السطوات والشركات والسباقات الخارقة.",
    synopsisEn: "The record-breaking Los Santos epic featuring Michael, Franklin, and Trevor. Includes the ever-evolving GTA Online world packed with thrilling heists, enterprises, and high-octane races.",
    cpuMin: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz",
    gpuMin: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
    ramMin: "4 GB",
    cpuRec: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350",
    gpuRec: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
    ramRec: "8 GB - 16 GB",
    platforms: ["PC", "PS5", "PS4", "Xbox"],
    playUrl: "https://www.rockstargames.com/gta-v"
  },
  {
    id: "gta_sa",
    titleAr: "جي تي أي: سان أندرياس",
    titleEn: "GTA: San Andreas (The Definitive Edition)",
    series: "gta",
    category: ["gta", "openworld"],
    year: "2004 / 2021",
    rating: "9.7",
    developer: "Rockstar Games",
    genreAr: "عالم مفتوح / كلاسيكيات العصابات",
    genreEn: "Open World / Gangster Classic",
    image: "assets/games/gta_sa.jpg",
    badgeTextAr: "كلاسيكية خالدة",
    badgeTextEn: "All-Time Classic",
    synopsisAr: "الرحلة الأيقونية لكارل جونسون (CJ) في أوائل التسعينيات عبر ولاية سان أندرياس لإنقاذ عائلته والسيطرة على شوارع غروف ستريت بعد مقتل والدته في ملحمة درامية تاريخية.",
    synopsisEn: "Carl Johnson returns to Los Santos after his mother's murder to save his family and take back Grove Street across three vibrant cities in 1990s California.",
    cpuMin: "Intel Core i5-6600K / AMD FX-6300",
    gpuMin: "NVIDIA GeForce GTX 760 2GB / AMD Radeon R9 280 3GB",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-2700K / AMD Ryzen 5 2600",
    gpuRec: "NVIDIA GeForce GTX 970 4GB / AMD Radeon RX 570 4GB",
    ramRec: "16 GB",
    platforms: ["PC", "PS5", "Xbox", "Switch"],
    playUrl: "https://www.rockstargames.com"
  },
  {
    id: "gta_vice_city",
    titleAr: "جي تي أي: فايس سيتي",
    titleEn: "GTA: Vice City (The Definitive Edition)",
    series: "gta",
    category: ["gta", "openworld"],
    year: "2002 / 2021",
    rating: "9.6",
    developer: "Rockstar Games",
    genreAr: "أجواء الثمانينات / عالم مفتوح",
    genreEn: "1980s Neon / Open World Crime",
    image: "assets/games/gta_vice_city.jpg",
    badgeTextAr: "عالم النيون",
    badgeTextEn: "Neon World",
    synopsisAr: "رحلة الصعود الأسطورية لتومي فيرسيتي في مدينة فايس سيتي المشبعة بأشجار النخيل وأنوار النيون الوردية والموسيقى التصويرية الخالدة للثمانينيات بعد خروجه من السجن.",
    synopsisEn: "Tommy Vercetti arrives in neon-soaked 1980s Vice City to build a criminal empire amidst pastel suits, palm trees, and legendary synth-pop radio hits.",
    cpuMin: "Intel Core i5-6600K / AMD FX-6300",
    gpuMin: "NVIDIA GeForce GTX 760 2GB",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-2700K / AMD Ryzen 5 2600",
    gpuRec: "NVIDIA GeForce GTX 970 4GB",
    ramRec: "16 GB",
    platforms: ["PC", "PS5", "Xbox", "Switch"],
    playUrl: "https://www.rockstargames.com"
  },
  {
    id: "gta4",
    titleAr: "جراند ثفت أوتو 4",
    titleEn: "Grand Theft Auto IV: Complete Edition",
    series: "gta",
    category: ["gta", "openworld"],
    year: "2008",
    rating: "9.5",
    developer: "Rockstar Games",
    genreAr: "عالم مفتوح / فيزياء واقعية ومطاردات",
    genreEn: "Gritty Open World / Driving Physics",
    image: "assets/games/gta4.jpg",
    badgeTextAr: "الواقعية المطلقة",
    badgeTextEn: "Pure Realism",
    synopsisAr: "مغامرة المهاجر نيكو بيليك في شوارع ليبرتي سيتي بحثاً عن الحلم الأمريكي والانتقام من خيانة قديمة، مع نظام فيزياء قيادة وتصادم يُعد الأدق والأروع في السلسلة.",
    synopsisEn: "Eastern European immigrant Niko Bellic pursues the elusive American Dream through the gritty, hyper-realistic boroughs of Liberty City alongside his cousin Roman.",
    cpuMin: "Intel Core 2 Duo 1.8GHz / AMD Athlon X2 64 2.4GHz",
    gpuMin: "256MB NVIDIA 7900 / 256MB ATI X1900",
    ramMin: "2 GB",
    cpuRec: "Intel Core 2 Quad 2.4GHz / AMD Phenom X3 2.1GHz",
    gpuRec: "512MB NVIDIA 8600 / 512MB ATI 3870",
    ramRec: "4 GB",
    platforms: ["PC", "Xbox 360", "PS3"],
    playUrl: "https://store.steampowered.com/app/12210"
  },

  // --- ASSASSIN'S CREED FULL SAGA ---
  {
    id: "ac_shadows",
    titleAr: "أساسنز كريد شادوز",
    titleEn: "Assassin's Creed Shadows",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2024 / 2025",
    rating: "9.4",
    developer: "Ubisoft",
    genreAr: "تسلل وعالم مفتوح / اليابان الإقطاعية",
    genreEn: "Stealth Action / Feudal Japan",
    image: "assets/games/ac_shadows.jpg",
    badgeTextAr: "اليابان الإقطاعية",
    badgeTextEn: "Feudal Japan",
    synopsisAr: "عش المغامرة المرتقبة في اليابان الإقطاعية في أواخر حقبة سينغوكو بشخصيتين متكاملتين: الشينوبي الرشيقة ناوي ذات أسلوب التخفي القاتل، والساموراي الأسطوري ياسوكي ذو القوة الضاربة.",
    synopsisEn: "Explore late Sengoku-era feudal Japan through intertwined paths: Naoe, an agile shinobi assassin, and Yasuke, the legendary powerhouse African samurai.",
    cpuMin: "Intel Core i7-4790 / AMD Ryzen 5 1600",
    gpuMin: "NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 570",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-8700K / AMD Ryzen 5 3600",
    gpuRec: "NVIDIA GeForce RTX 3060 Ti / AMD RX 6700 XT",
    ramRec: "16 GB",
    platforms: ["PC", "PS5", "Xbox Series"],
    playUrl: "https://www.ubisoft.com/game/assassins-creed/shadows"
  },
  {
    id: "ac_mirage",
    titleAr: "أساسنز كريد ميراج",
    titleEn: "Assassin's Creed Mirage",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2023",
    rating: "9.0",
    developer: "Ubisoft",
    genreAr: "تخفي وباركور كلاسيكي / بغداد",
    genreEn: "Classic Stealth & Parkour / 9th Century Baghdad",
    image: "assets/games/ac_mirage.jpg",
    badgeTextAr: "العودة للجذور",
    badgeTextEn: "Back to Roots",
    synopsisAr: "العودة الملحمية إلى الجذور الكلاسيكية للتخفي والاغتيال في بغداد العباسية بالقرن التاسع، متابعين باسم بن إسحاق وتحوله من مجرد لص شوارع إلى أستاذ أخوية الأساسنز في قلعة ألموت.",
    synopsisEn: "A heartfelt return to classic stealth assassinations and parkour through the Golden Age of 9th-century Baghdad, charting Basim Ibn Ishaq's rise to Master Assassin.",
    cpuMin: "Intel Core i7-4790K / AMD Ryzen 5 1600",
    gpuMin: "NVIDIA GTX 1060 (6GB) / AMD RX 570 (4GB)",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-8700K / AMD Ryzen 5 3600",
    gpuRec: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT",
    ramRec: "16 GB",
    platforms: ["PC", "PS5", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/2842100"
  },
  {
    id: "ac_valhalla",
    titleAr: "أساسنز كريد فالهالا",
    titleEn: "Assassin's Creed Valhalla",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2020",
    rating: "9.2",
    developer: "Ubisoft",
    genreAr: "آر بي جي / فايكنج وعالم مفتوح",
    genreEn: "Action RPG / Viking Era England",
    image: "assets/games/ac_valhalla.jpg",
    badgeTextAr: "ملحمة الفايكنج",
    badgeTextEn: "Viking Saga",
    synopsisAr: "قُد قبيلة محاربي الفايكنج مع إيفور عبر البحار الشمالية الجليدية لغزو الممالك الإنجليزية الممزقة، وبناء مستوطنتك الخاصة والتحالف مع الملوك وصنع اسمك ليخلد في قاعات فالهالا.",
    synopsisEn: "Lead the Raven Clan across the icy North Sea to settle England's fractured kingdoms as legendary Viking raider Eivor, forging alliances and seeking glory for Valhalla.",
    cpuMin: "AMD Ryzen 3 1200 / Intel Core i5-4460",
    gpuMin: "NVIDIA GeForce GTX 960 4GB / AMD Radeon R9 380",
    ramMin: "8 GB",
    cpuRec: "AMD Ryzen 5 3600 / Intel Core i7-8700K",
    gpuRec: "NVIDIA GeForce RTX 2070 Super / AMD RX 5700XT",
    ramRec: "16 GB",
    platforms: ["PC", "PS5", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/2208920"
  },
  {
    id: "ac_odyssey",
    titleAr: "أساسنز كريد أوديسي",
    titleEn: "Assassin's Creed Odyssey",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2018",
    rating: "9.3",
    developer: "Ubisoft",
    genreAr: "آر بي جي ملحمي / اليونان القديمة",
    genreEn: "Epic RPG / Ancient Greece & Sparta",
    image: "assets/games/ac_odyssey.jpg",
    badgeTextAr: "اليونان القديمة",
    badgeTextEn: "Ancient Greece",
    synopsisAr: "انطلق في رحلة ملحمية عبر بحر إيجة واليونان القديمة إبان الحرب البيلوبونيسية كمرتزق إسبرطي خارق (كاساندرا أو أليكسيوس) مسلحاً برمح ليونيداس الأسطوري لمواجهة جماعة الكوزموس.",
    synopsisEn: "Live your own epic Spartan odyssey across the Aegean during the Peloponnesian War as Kassandra or Alexios, wielding the Spear of Leonidas to dismantle the Cult of Kosmos.",
    cpuMin: "AMD FX 6300 / Intel Core i5 2400",
    gpuMin: "NVIDIA GeForce GTX 660 / AMD Radeon R9 285",
    ramMin: "8 GB",
    cpuRec: "AMD FX-8350 / Intel Core i7-3770",
    gpuRec: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
    ramRec: "8 GB - 16 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/812140"
  },
  {
    id: "ac_origins",
    titleAr: "أساسنز كريد أوريجنز",
    titleEn: "Assassin's Creed Origins",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2017",
    rating: "9.4",
    developer: "Ubisoft",
    genreAr: "آر بي جي ومغامرات / مصر الفرعونية",
    genreEn: "Action RPG / Ancient Egypt",
    image: "assets/games/ac_origins.jpg",
    badgeTextAr: "نشأة العقيدة - مصر",
    badgeTextEn: "Birth of the Brotherhood",
    synopsisAr: "البداية الحقيقية لولادة عقيدة الحشاشين في مصر البطلمية القديمة. تقمص شخصية بايك من سيوة، آخر الميدجاي الحماة، وزوجته آية وسط مؤامرات كليوباترا، يوليوس قيصر، وجماعة القدماء.",
    synopsisEn: "Witness the birth of the Assassin Brotherhood in Ptolemaic Egypt through Bayek of Siwa, the last Medjay protector, alongside his fiercely loyal wife Aya amidst Cleopatra and Caesar's power struggles.",
    cpuMin: "Intel Core i5-2400s / AMD FX-6350",
    gpuMin: "NVIDIA GeForce GTX 660 / AMD R9 270",
    ramMin: "6 GB",
    cpuRec: "Intel Core i7- 3770 / AMD FX-8350",
    gpuRec: "NVIDIA GeForce GTX 760 / AMD R9 280X",
    ramRec: "8 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/582160"
  },
  {
    id: "ac_syndicate",
    titleAr: "أساسنز كريد سينديكيت",
    titleEn: "Assassin's Creed Syndicate",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2015",
    rating: "8.8",
    developer: "Ubisoft",
    genreAr: "عالم مفتوح / لندن الثورة الصناعية",
    genreEn: "Open World / Victorian London 1868",
    image: "assets/games/ac_syndicate.jpg",
    badgeTextAr: "لندن الصناعية 1868",
    badgeTextEn: "Victorian London",
    synopsisAr: "لندن عام 1868 في ذروة الثورة الصناعية. يقود التوأمان جاكوب وإيفي فراي عصابات الشوارع لتحرير العاصمة البريطانية والطبقة العاملة من قبضة فرسان الهيكل الفاسدين باستخدام خطاف الحبال وقبضات اليد.",
    synopsisEn: "1868 Industrial London. Twin assassins Jacob and Evie Frye unite underground street gangs to liberate the working class from corrupt Templar rule using rope launchers and brass knuckles.",
    cpuMin: "Intel Core i5 2400s / AMD FX 6350",
    gpuMin: "NVIDIA GeForce GTX 660 / AMD Radeon R9 270",
    ramMin: "6 GB",
    cpuRec: "Intel Core i7 3770 / AMD FX 8350",
    gpuRec: "NVIDIA GeForce GTX 760 / AMD Radeon R9 280X",
    ramRec: "8 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/368500"
  },
  {
    id: "ac_unity",
    titleAr: "أساسنز كريد يونيتي",
    titleEn: "Assassin's Creed Unity",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2014",
    rating: "8.9",
    developer: "Ubisoft",
    genreAr: "باركور وتسلل / باريس والثورة الفرنسية",
    genreEn: "Parkour & Stealth / French Revolution",
    image: "assets/games/ac_unity.jpg",
    badgeTextAr: "أعظم نظام باركور",
    badgeTextEn: "Pinnacle Parkour",
    synopsisAr: "باريس عام 1789 أثناء اندلاع نيران الثورة الفرنسية. قصة فداء وانتقام كلاسيكية مع الشاب آرنو دوريان داخل كاتدرائية نوتردام وشوارع باريس المكتظة بالآلاف بنظام حركة وباركور أسطوري.",
    synopsisEn: "Paris 1789 during the violent French Revolution. Arno Dorian seeks redemption through love and vengeance, featuring stunning dense crowds and the definitive parkour system of the franchise.",
    cpuMin: "Intel Core i5-2500K / AMD FX-8350",
    gpuMin: "NVIDIA GeForce GTX 680 / AMD Radeon HD 7970",
    ramMin: "6 GB",
    cpuRec: "Intel Core i7-3770 / AMD FX-8350",
    gpuRec: "NVIDIA GeForce GTX 780 / AMD Radeon R9 290X",
    ramRec: "8 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/289650"
  },
  {
    id: "ac_rogue",
    titleAr: "أساسنز كريد روج",
    titleEn: "Assassin's Creed Rogue",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2014",
    rating: "8.7",
    developer: "Ubisoft",
    genreAr: "معارك بحرية / صياد الأساسنز",
    genreEn: "Naval Battles / Assassin Hunter",
    image: "assets/games/ac_rogue.jpg",
    badgeTextAr: "منظور التمبلرز",
    badgeTextEn: "Templar Perspective",
    synopsisAr: "القصة المظلمة من منظور فرسان الهيكل مع شاي باتريك كورماك، الأساسن السابق الذي شعر بخيانة قادة أخويته، ليتحول إلى أخطر صياد للأساسنز في المياه الجليدية لشمال الأطلسي ونيويورك.",
    synopsisEn: "Experience the dark turn of the Seven Years' War through Shay Patrick Cormac, a betrayed former Assassin who becomes the ultimate Assassin Hunter in the North Atlantic icy waters.",
    cpuMin: "Intel Core 2 Quad Q6600 / AMD Athlon II X4 620",
    gpuMin: "nVidia GeForce GTS450 / AMD Radeon HD5670",
    ramMin: "2 GB",
    cpuRec: "Intel Core i5 2400s / AMD FX-6100",
    gpuRec: "nVidia GeForce GTX 560Ti / AMD Radeon HD 6870",
    ramRec: "4 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/311560"
  },
  {
    id: "ac4_blackflag",
    titleAr: "أساسنز كريد 4: بلاك فلاج",
    titleEn: "Assassin's Creed IV: Black Flag",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2013",
    rating: "9.5",
    developer: "Ubisoft",
    genreAr: "قراصنة الكاريبي / معارك بحرية وعالم مفتوح",
    genreEn: "Golden Age of Piracy / Naval Combat",
    image: "assets/games/ac4_blackflag.jpg",
    badgeTextAr: "أعظم لعبة قراصنة",
    badgeTextEn: "Greatest Pirate Game",
    synopsisAr: "العصر الذهبي للقرصنة عام 1715 في جزر الكاريبي الخلابة مع الكابتن إدوارد كينواي، سفينة الجاكدور، وأشهر قراصنة التاريخ مثل بلاك بيرد وسط معارك بحرية ملحمية وكنوز وجزر استوائية لا متناهية.",
    synopsisEn: "1715 Caribbean Golden Age of Piracy. Command the Jackdaw as roguish pirate captain Edward Kenway alongside Blackbeard in breathtaking naval warfare across lush tropical archipelagos.",
    cpuMin: "Intel Core2Quad Q8400 / AMD Athlon II X4 620",
    gpuMin: "Nvidia Geforce GTX 260 / AMD Radeon HD 4870",
    ramMin: "2 GB",
    cpuRec: "Intel Core i5 2400S / AMD Phenom II x4 940",
    gpuRec: "Nvidia GeForce GTX 470 / AMD Radeon HD 5850",
    ramRec: "4 GB",
    platforms: ["PC", "PS4", "Xbox", "Switch"],
    playUrl: "https://store.steampowered.com/app/242050"
  },
  {
    id: "ac3",
    titleAr: "أساسنز كريد 3",
    titleEn: "Assassin's Creed III Remastered",
    series: "assassins",
    category: ["assassins", "openworld"],
    year: "2012 / 2019",
    rating: "8.9",
    developer: "Ubisoft",
    genreAr: "عالم مفتوح / الثورة الأمريكية",
    genreEn: "American Revolution / Frontier Open World",
    image: "assets/games/ac3.jpg",
    badgeTextAr: "الثورة الأمريكية 1775",
    badgeTextEn: "American Revolution",
    synopsisAr: "في خضم الثورة الأمريكية عام 1775، ينهض المحارب الأمريكي الأصلي كونور (رادونهاجيدون) لحماية أرض قبيلته من غزو المستعمرين وفرسان الهيكل بجانب جورج واشنطن وبنجامين فرانكلين.",
    synopsisEn: "Set during the American Revolution of 1775. Native American assassin Connor fights to protect his homeland and people amidst George Washington, Benjamin Franklin, and Templar conspiracies.",
    cpuMin: "Intel Core i5 2400 @ 3.1 GHz / AMD FX 6350 @ 3.9 GHz",
    gpuMin: "Nvidia GeForce GTX 660 / AMD Radeon R9 270X",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7 3770K @ 3.5 GHz / AMD FX 8350 @ 4.0 GHz",
    gpuRec: "Nvidia GeForce GTX 970 / AMD Radeon R9 290X",
    ramRec: "8 GB",
    platforms: ["PC", "PS4", "Xbox", "Switch"],
    playUrl: "https://store.steampowered.com/app/911400"
  },
  {
    id: "ac_revelations",
    titleAr: "أساسنز كريد ريفليشنز",
    titleEn: "Assassin's Creed Revelations",
    series: "assassins",
    category: ["assassins"],
    year: "2011",
    rating: "9.1",
    developer: "Ubisoft",
    genreAr: "تخفي ومغامرات / القسطنطينية العثمانية",
    genreEn: "Stealth Action / Ottoman Constantinople",
    image: "assets/games/ac_revelations.jpg",
    badgeTextAr: "خاتمة ملحمة إزيو",
    badgeTextEn: "Ezio Trilogy Finale",
    synopsisAr: "الفصل الختامي الخالد لثلاثية المعلم إزيو أوديتوري في القسطنطينية (إسطنبول) إبان الحكم العثماني، مستخدماً نصل الخطاف لاكتشاف أختام الطائر بن لا أحد وفتح أسرار مكتبة مصياف القديمة.",
    synopsisEn: "The thrilling conclusion to Master Ezio Auditore's journey in Ottoman Constantinople, tracing the memory seals of Altaïr Ibn-La'Ahad to unlock Masyaf's ancient secrets.",
    cpuMin: "1.8 GHz Intel Core 2 Duo E4300 / 2.4 GHz AMD Athlon 64 X2 4600+",
    gpuMin: "256 MB DirectX 9.0-compliant card",
    ramMin: "1.5 GB",
    cpuRec: "2.6 GHz Intel Core 2 Duo E6700 / 3.0 GHz AMD Athlon 64 X2 6000+",
    gpuRec: "512 MB DirectX 9.0-compliant card",
    ramRec: "2 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/201870"
  },
  {
    id: "ac_brotherhood",
    titleAr: "أساسنز كريد براذرهود",
    titleEn: "Assassin's Creed Brotherhood",
    series: "assassins",
    category: ["assassins"],
    year: "2010",
    rating: "9.4",
    developer: "Ubisoft",
    genreAr: "تخفي ومغامرات / روما وعائلة بورجيا",
    genreEn: "Brotherhood Command / Renaissance Rome",
    image: "assets/games/ac_brotherhood.jpg",
    badgeTextAr: "قيادة الأخوية في روما",
    badgeTextEn: "Command the Brotherhood",
    synopsisAr: "إزيو أوديتوري يسافر إلى قلب روما الإيطالية لمقارعة عائلة بورجيا الطاغية، ويقوم بتجنيد وتدريب أساسنز جدد وإرسالهم في مهام سرية حول العالم واستدعائهم في أي لحظة للقتال.",
    synopsisEn: "Ezio journeys to Rome to strike at the corrupt Borgia regime. Recruit, train, and command an entire Brotherhood of Assassins across the Eternal City.",
    cpuMin: "Intel Core 2 Duo 1.8 GHZ / AMD Athlon X2 64 2.4GHZ",
    gpuMin: "256 MB DirectX 9.0-compliant card",
    ramMin: "1.5 GB",
    cpuRec: "Intel Core 2 Duo E6700 2.6 GHz / AMD Athlon 64 X2 6000+",
    gpuRec: "GeForce 8800 GT / ATI Radeon HD 4700",
    ramRec: "2 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/48190"
  },
  {
    id: "ac2",
    titleAr: "أساسنز كريد 2",
    titleEn: "Assassin's Creed II",
    series: "assassins",
    category: ["assassins"],
    year: "2009",
    rating: "9.7",
    developer: "Ubisoft",
    genreAr: "عصر النهضة الإيطالية / التحفة الخالدة",
    genreEn: "Italian Renaissance / Timeless Masterpiece",
    image: "assets/games/ac2.jpg",
    badgeTextAr: "التحفة التاريخية",
    badgeTextEn: "Historic Masterpiece",
    synopsisAr: "التحفة الخالدة التي صنعت أسطورة السلسلة، في عصر النهضة الإيطالية مع الشاب النبيل إزيو أوديتوري دا فيرينزي في فلورنسا والبندقية بمساعدة ليوناردو دافنشي بعد إعدام عائلته ظلماً.",
    synopsisEn: "The crowning Renaissance masterpiece that defined open-world stealth. Follow young Florentine nobleman Ezio Auditore da Firenze on an unforgettable quest for truth and vengeance with Leonardo da Vinci.",
    cpuMin: "Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 64 2.4 GHz",
    gpuMin: "256 MB DirectX 9.0-compliant card",
    ramMin: "1.5 GB",
    cpuRec: "Intel Core 2 Duo E6700 2.6 GHz / AMD Athlon 64 X2 6000+",
    gpuRec: "GeForce 8800 GT / ATI Radeon HD 4700",
    ramRec: "2 GB",
    platforms: ["PC", "PS4", "Xbox"],
    playUrl: "https://store.steampowered.com/app/33230"
  },
  {
    id: "ac1",
    titleAr: "أساسنز كريد 1",
    titleEn: "Assassin's Creed",
    series: "assassins",
    category: ["assassins"],
    year: "2007",
    rating: "9.0",
    developer: "Ubisoft",
    genreAr: "الحملة الصليبية الثالثة / الأرض المقدسة",
    genreEn: "Third Crusade 1191 / Holy Land",
    image: "assets/games/ac1.jpg",
    badgeTextAr: "بداية الأسطورة",
    badgeTextEn: "Where It All Began",
    synopsisAr: "الانطلاقة التاريخية الأولى في الأرض المقدسة أثناء الحملة الصليبية الثالثة عام 1191 مع الطائر بن لا أحد وقائد الجماعة المعلم في قلعة مصياف، وتأسيس العقيدة الأبدية: لا شيء حقيقي، كل شيء مباح.",
    synopsisEn: "The groundbreaking inception set in 1191 Holy Land during the Third Crusade. Play as Altaïr Ibn-La'Ahad at Masyaf Fortress upholding the timeless Creed: Nothing is true, everything is permitted.",
    cpuMin: "Dual core processor 2.6 GHz Intel Pentium D / AMD Athlon 64 X2 3800+",
    gpuMin: "256 MB DirectX 10.0-compliant video card",
    ramMin: "1 GB",
    cpuRec: "Intel Core 2 Duo 2.2 GHz / AMD Athlon 64 X2 4400+",
    gpuRec: "512 MB video card",
    ramRec: "2 GB",
    platforms: ["PC", "PS3", "Xbox 360"],
    playUrl: "https://store.steampowered.com/app/15100"
  },

  // --- STEAM ALL-TIME BLOCKBUSTERS ---
  {
    id: "cs2",
    titleAr: "كاونتر سترايك 2 (CS2)",
    titleEn: "Counter-Strike 2",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2023",
    rating: "9.5",
    developer: "Valve",
    genreAr: "تصويب تكتيكي تنافسي 5v5",
    genreEn: "Tactical Competitive Multiplayer FPS",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    badgeTextAr: "أسطورة ستيم الأولى",
    badgeTextEn: "#1 Steam Legend",
    synopsisAr: "أضخم قفزة تقنية في تاريخ سلسلة كاونتر سترايك بمحرك Source 2. فيزياء الدخان الحجمي المتفاعلة مع الرصاص، معدل تحديث Sub-tick فائق الدقة، وخرائط تنافسية أسطورية مجددة بالكامل.",
    synopsisEn: "The largest technical leap in Counter-Strike history built on Source 2. Dynamic volumetric smokes, sub-tick precision, and overhauled legendary competitive maps.",
    cpuMin: "4 hardware CPU threads - Intel Core i5 750 / AMD equivalent",
    gpuMin: "Video card must be 1 GB or more with DirectX 11 / Shader Model 5.0",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
    gpuRec: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/730/CounterStrike_2/",
    steamAppId: "730",
    isSteam: true
  },
  {
    id: "rdr2",
    titleAr: "ريد ديد ريدمبشن 2",
    titleEn: "Red Dead Redemption 2",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2019",
    rating: "9.9",
    developer: "Rockstar Games",
    genreAr: "عالم مفتوح / ملحمة الغرب الأمريكي",
    genreEn: "Open World / Western Action-Adventure",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
    badgeTextAr: "تحفة القرن الفنية",
    badgeTextEn: "Masterpiece of the Era",
    synopsisAr: "الملحمة الأسطورية لآرثر مورغان وعصابة فان دير ليند في الغرب الأمريكي مع نهاية عصر الخارجين عن القانون عام 1899. أضخم وأعمق عالم مفتوح تفاعلي وواقعي في تاريخ الألعاب.",
    synopsisEn: "Arthur Morgan and the Van der Linde gang flee across 1899 America at the dawn of the modern age. An undisputed storytelling and open-world masterpiece.",
    cpuMin: "Intel Core i5-2500K / AMD FX-6300",
    gpuMin: "NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
    gpuRec: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
    ramRec: "16 GB",
    platforms: ["PC", "Steam", "PS5", "Xbox"],
    playUrl: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    steamAppId: "1174180",
    isSteam: true
  },
  {
    id: "eldenring",
    titleAr: "إلدن رينج (ELDEN RING)",
    titleEn: "ELDEN RING",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2022 / 2024",
    rating: "9.9",
    developer: "FromSoftware",
    genreAr: "آر بي جي سولز / عالم مظلم أسطوري",
    genreEn: "Action RPG / Dark Fantasy Souls-Like",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    badgeTextAr: "لعبة العام (GOTY)",
    badgeTextEn: "Game of the Year",
    synopsisAr: "التحفة الحاصلة على جوائز لعبة العام من إبداع هيديتاكا ميازاكي وجورج ر.ر. مارتن. استكشف الأراضي الواقعة بين العوالم واهزم الزعماء الجبابرة لتصبح السيد الإلدني.",
    synopsisEn: "The dark fantasy action RPG phenomenon created by Hidetaka Miyazaki and George R. R. Martin. Journey across the Lands Between to claim the Elden Ring.",
    cpuMin: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
    gpuMin: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
    ramMin: "12 GB",
    cpuRec: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
    gpuRec: "NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB",
    ramRec: "16 GB",
    platforms: ["PC", "Steam", "PS5", "Xbox"],
    playUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    steamAppId: "1245620",
    isSteam: true
  },
  {
    id: "wukong",
    titleAr: "بلاك ميث: ووكونغ",
    titleEn: "Black Myth: Wukong",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2024",
    rating: "9.8",
    developer: "Game Science",
    genreAr: "أكشن آر بي جي / أساطير صينية ملحمية",
    genreEn: "Action RPG / Chinese Mythology Epic",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    badgeTextAr: "ظاهرة ستيم القياسية",
    badgeTextEn: "All-Time Steam Record",
    synopsisAr: "انطلق بشخصية المقدر له المستوحاة من رواية رحلة إلى الغرب، وحارب عبر عوالم أسطورية مليئة بالوحوش والأسرار بمحرك Unreal Engine 5 في اللعبة التي حطمت أرقام ستيم القياسية.",
    synopsisEn: "Set out as the Destined One in this mythical Unreal Engine 5 action RPG rooted in Chinese mythology that shattered global Steam player records.",
    cpuMin: "Intel Core i5-8400 / AMD Ryzen 5 1600",
    gpuMin: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
    ramMin: "16 GB",
    cpuRec: "Intel Core i7-9700 / AMD Ryzen 5 5500",
    gpuRec: "NVIDIA GeForce RTX 2060 / RTX 4070 (DLSS Enabled)",
    ramRec: "16 GB - 32 GB",
    platforms: ["PC", "Steam", "PS5"],
    playUrl: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    steamAppId: "2358720",
    isSteam: true
  },
  {
    id: "pubg",
    titleAr: "ببجي: باتل جراوندز",
    titleEn: "PUBG: BATTLEGROUNDS",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2017 - 2024",
    rating: "9.2",
    developer: "KRAFTON",
    genreAr: "باتل رويال تكتيكي 100 لاعب",
    genreEn: "100-Player Tactical Battle Royale",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    badgeTextAr: "مؤسس الباتل رويال",
    badgeTextEn: "Battle Royale Icon",
    synopsisAr: "اهبط بالمظلة مع 100 لاعب في خرائط عملاقة، ابحث عن الأسلحة والمركبات، وتنافس استراتيجياً داخل المنطقة الزرقاء لتكون آخر الناجين (Winner Winner Chicken Dinner).",
    synopsisEn: "Land, loot, and outsurvive 99 players in high-stakes tactical battlegrounds for the ultimate Chicken Dinner.",
    cpuMin: "Intel i5-4430 / AMD FX-6300",
    gpuMin: "NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB",
    ramMin: "8 GB",
    cpuRec: "Intel i5-6600K / AMD Ryzen 5 1600",
    gpuRec: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
    ramRec: "16 GB",
    platforms: ["PC", "Steam", "PS5", "Xbox"],
    playUrl: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
    steamAppId: "578080",
    isSteam: true
  },
  {
    id: "cyberpunk2077",
    titleAr: "سايبربانك 2077: فانتوم ليبرتي",
    titleEn: "Cyberpunk 2077: Phantom Liberty",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2020 / 2024",
    rating: "9.6",
    developer: "CD PROJEKT RED",
    genreAr: "عالم مفتوح سيبراني / آر بي جي مستقبلي",
    genreEn: "Action RPG / Open World Cyberpunk",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    badgeTextAr: "عالم النيون الأسطوري",
    badgeTextEn: "Ray Tracing Overdrive",
    synopsisAr: "تقمص شخصية V المرتزق المعدل سيبرانياً في شوارع نايت سيتي ومنطقة دوغ تاون المشبعة بالنيون والمؤامرات مع النجمين كيانو ريفز وإدريس إلبا في تجربة بصرية خارقة.",
    synopsisEn: "Enter the cyber-enhanced criminal underbelly of Night City alongside Keanu Reeves and Idris Elba with groundbreaking Ray Tracing Overdrive visuals.",
    cpuMin: "Intel Core i7-6700 / AMD Ryzen 5 1600",
    gpuMin: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
    ramMin: "12 GB",
    cpuRec: "Intel Core i7-12700 / AMD Ryzen 7 7800X3D",
    gpuRec: "NVIDIA GeForce RTX 3080 / RTX 4080 (RTX Path Tracing)",
    ramRec: "16 GB - 32 GB",
    platforms: ["PC", "Steam", "PS5", "Xbox"],
    playUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    steamAppId: "1091500",
    isSteam: true
  },
  {
    id: "baldursgate3",
    titleAr: "بوابات بالدور 3 (Baldur's Gate 3)",
    titleEn: "Baldur's Gate 3",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2023",
    rating: "9.9",
    developer: "Larian Studios",
    genreAr: "آر بي جي كلاسيكي / حرية مطلقة (GOTY)",
    genreEn: "Action RPG / D&D Fantasy Adventure",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
    badgeTextAr: "لعبة عام 2023 GOTY",
    badgeTextEn: "Game of the Year",
    synopsisAr: "التحفة الفائزة بلقب لعبة العام GOTY. تجربة تقمص أدوار تعتمد على خياراتك وقراراتك بحرية لا نهائية في عالم Dungeons & Dragons الساحر.",
    synopsisEn: "The monumental Game of the Year winner. Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal.",
    cpuMin: "Intel i5-4690 / AMD FX 8350",
    gpuMin: "Nvidia GTX 970 / RX 480 (4GB+)",
    ramMin: "8 GB",
    cpuRec: "Intel i7 8700K / AMD r5 3600",
    gpuRec: "Nvidia 2060 Super / RX 5700 XT (8GB+)",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    steamAppId: "1086940",
    isSteam: true
  },
  {
    id: "helldivers2",
    titleAr: "هيل دايفرز 2 (HELLDIVERS™ 2)",
    titleEn: "HELLDIVERS™ 2",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2024",
    rating: "9.4",
    developer: "Arrowhead Game Studios",
    genreAr: "تصويب تعاوني فضائي / نشر الديمقراطية",
    genreEn: "Third-Person Co-Op Galactic Shooter",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg",
    badgeTextAr: "أقوى لعبة تعاونية 2024",
    badgeTextEn: "Top Co-Op Hit",
    synopsisAr: "انضم إلى نخبة Helldivers وقاتل مع أصدقائك عبر المجرة ضد غزو الحشرات والآليين لنشر الحرية والديمقراطية في تجربة فوضوية حماسية ممتعة.",
    synopsisEn: "The galaxy's last line of offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic third-person shooter.",
    cpuMin: "Intel Core i7-4790K / AMD Ryzen 5 1500X",
    gpuMin: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
    gpuRec: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600XT",
    ramRec: "16 GB",
    platforms: ["PC", "Steam", "PS5"],
    playUrl: "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
    steamAppId: "553850",
    isSteam: true
  },
  {
    id: "eafc25",
    titleAr: "إي إيه سبورتس إف سي 25 (EA FC 25)",
    titleEn: "EA SPORTS FC™ 25",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2024",
    rating: "9.1",
    developer: "EA Sports",
    genreAr: "كرة قدم واقعية / ألتميت تيم",
    genreEn: "Football / Ultimate Team Simulation",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg",
    badgeTextAr: "كرة القدم العالمية",
    badgeTextEn: "Official Football",
    synopsisAr: "الجيل الأحدث من تجربة كرة القدم بمحرك FC IQ التكتيكي ونمط Rush 5v5، وتجربة اللعب مع أكثر من 19,000 لاعب و700 فريق مرخص رسمياً.",
    synopsisEn: "Experience the next chapter of the World's Game with FC IQ tactics, 5v5 Rush mode, and over 19,000 licensed players.",
    cpuMin: "Intel Core i5-6600K / AMD Ryzen 5 1600",
    gpuMin: "NVIDIA GeForce GTX 1050 Ti 4GB / AMD Radeon RX 570 4GB",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-6700 / AMD Ryzen 7 2700X",
    gpuRec: "NVIDIA GeForce GTX 1660 / AMD Radeon RX 5600 XT",
    ramRec: "12 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/2669320/EA_SPORTS_FC_25/",
    steamAppId: "2669320",
    isSteam: true
  },
  {
    id: "codwarzone",
    titleAr: "كول أوف ديوتي: وارزون (Call of Duty Warzone)",
    titleEn: "Call of Duty®: Warzone™",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2023 / 2024",
    rating: "9.0",
    developer: "Infinity Ward / Raven Software",
    genreAr: "باتل رويال تكتيكي سريع",
    genreEn: "Free-to-Play Battle Royale FPS",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
    badgeTextAr: "باتل رويال الأسلحة",
    badgeTextEn: "Free-to-Play Warzone",
    synopsisAr: "انزل في ساحة المعركة الضخمة مع فريقك، تسلح بأقوى العتاد والأسلحة الحربية الحديثة، وقاتل حتى تظل الفرقة الأخيرة الناجية على قيد الحياة.",
    synopsisEn: "Welcome to Warzone, the massive free-to-play combat arena featuring popular maps, dynamic combat, and seasonal content drops.",
    cpuMin: "Intel Core i5-6600 / AMD Ryzen 5 1400",
    gpuMin: "NVIDIA GeForce GTX 960 / AMD Radeon RX 470",
    ramMin: "8 GB",
    cpuRec: "Intel Core i7-8700K / AMD Ryzen 7 1800X",
    gpuRec: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 XT",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1938090/Call_of_Duty/",
    steamAppId: "1938090",
    isSteam: true
  },
  {
    id: "forzahorizon5",
    titleAr: "فورزا هورايزن 5 (Forza Horizon 5)",
    titleEn: "Forza Horizon 5",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2021",
    rating: "9.7",
    developer: "Playground Games",
    genreAr: "سباقات سيارات / عالم مفتوح مكسيكي",
    genreEn: "Open World Racing / Driving Simulator",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
    badgeTextAr: "ملك سباقات السيارات",
    badgeTextEn: "Ultimate Racing",
    synopsisAr: "استكشف مناظر المكسيك النابضة بالحياة من خلف مقود مئات من أعظم سيارات العالم مع فيزياء قيادة استثنائية ورسوم خلابة.",
    synopsisEn: "Your Ultimate Horizon Adventure awaits! Explore the vibrant landscapes of Mexico with limitless driving action in hundreds of world-class cars.",
    cpuMin: "Intel i5-4460 / AMD Ryzen 3 1200",
    gpuMin: "NVidia GTX 970 / AMD RX 470",
    ramMin: "8 GB",
    cpuRec: "Intel i7-10700K / AMD Ryzen 7 3800XT",
    gpuRec: "NVidia RTX 3070 / AMD RX 6800 XT",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    steamAppId: "1551360",
    isSteam: true
  },
  {
    id: "godofwar",
    titleAr: "إله الحرب (God of War)",
    titleEn: "God of War",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2022",
    rating: "9.8",
    developer: "Santa Monica Studio",
    genreAr: "أكشن مغامرات / الميثولوجيا الإسكندنافية",
    genreEn: "Action-Adventure / Norse Mythology",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
    badgeTextAr: "ملحمة كريتوس الأسطورية",
    badgeTextEn: "PlayStation Legend on Steam",
    synopsisAr: "رحلة كراتوس وابنه آتريوس في عوالم الآلهة الإسكندنافية والوحوش الأسطورية، قصة درامية ومغامرة ملحمية بأسلحة الفأس الليفياثان ورسوم 4K مذهلة.",
    synopsisEn: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
    cpuMin: "Intel i5-2500k (4 core 3.3 GHz) / AMD Ryzen 3 1200 (4 core 3.1 GHz)",
    gpuMin: "NVIDIA GTX 960 (4 GB) / AMD R9 290X (4 GB)",
    ramMin: "8 GB",
    cpuRec: "Intel i7-4770k (4 core 3.5 GHz) / AMD Ryzen 5 1600 (6 core 3.2 GHz)",
    gpuRec: "NVIDIA GTX 1060 (6 GB) / AMD RX 570 (4 GB)",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1593500/God_of_War/",
    steamAppId: "1593500",
    isSteam: true
  },
  {
    id: "spiderman",
    titleAr: "مارفل سبايدرمان (Marvel's Spider-Man Remastered)",
    titleEn: "Marvel's Spider-Man Remastered",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2022",
    rating: "9.7",
    developer: "Insomniac Games / Nixxes",
    genreAr: "بطل خارق / تأرجح سينمائي في نيويورك",
    genreEn: "Open World Super Hero Action",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
    badgeTextAr: "أعظم بطل خارق",
    badgeTextEn: "Marvel Hit",
    synopsisAr: "تأرجح بين ناطحات سحاب مانهاتن بشخصية بيتر باركر المخضرم في قتال الجريمة ومواجهة أشهر أشرار مارفل بسرعة وانسيابية خارقة.",
    synopsisEn: "Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains.",
    cpuMin: "Intel Core i3-4160, 3.6 GHz or AMD equivalent",
    gpuMin: "NVIDIA GTX 950 or AMD Radeon RX 470",
    ramMin: "8 GB",
    cpuRec: "Intel Core i5-4670, 3.4 Ghz or AMD Ryzen 5 1600, 3.2 Ghz",
    gpuRec: "NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/",
    steamAppId: "1817070",
    isSteam: true
  },
  {
    id: "rust",
    titleAr: "رست (Rust)",
    titleEn: "Rust",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2018 - 2024",
    rating: "9.3",
    developer: "Facepunch Studios",
    genreAr: "بقاء على قيد الحياة / بناء وسرقة قواعد",
    genreEn: "Multiplayer Hardcore Survival",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg",
    badgeTextAr: "تحدي البقاء الأشرس",
    badgeTextEn: "Survival Phenomenon",
    synopsisAr: "الهدف الوحيد في Rust هو البقاء على قيد الحياة. تغلب على الجوع والعطش والبرد، ابنِ قلعتك الحصينة وتحالف مع أصدقائك لصد غارات اللاعبين الآخرين.",
    synopsisEn: "The only aim in Rust is to survive. Overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals. Protect yourself.",
    cpuMin: "Intel Core i7-3770 / AMD FX-9590",
    gpuMin: "GTX 670 2GB / AMD R9 280",
    ramMin: "10 GB",
    cpuRec: "Intel Core i7-4790K / AMD Ryzen 5 1600",
    gpuRec: "GTX 980 / AMD R9 Fury",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/252490/Rust/",
    steamAppId: "252490",
    isSteam: true
  },
  {
    id: "witcher3",
    titleAr: "ذا ويتشر 3: الصيد البري (The Witcher 3)",
    titleEn: "The Witcher 3: Wild Hunt",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2015 / 2023",
    rating: "9.9",
    developer: "CD PROJEKT RED",
    genreAr: "آر بي جي أسطوري / صائد الوحوش جيرالت",
    genreEn: "Story-Driven Action RPG",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
    badgeTextAr: "أيقونة ألعاب الـ RPG",
    badgeTextEn: "All-Time Masterpiece",
    synopsisAr: "تقمص دور جيرالت أوف ريفيا، صائد الوحوش المأجور، وابحث عن سيري طفلة النبوءة في عالم خيالي مفتوح مليء بالمدن التجارية وجزر القراصنة والكهوف المنسية.",
    synopsisEn: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will.",
    cpuMin: "Intel CPU Core i5-2500K 3.3GHz / AMD A10-5800K APU (3.8GHz)",
    gpuMin: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
    ramMin: "6 GB",
    cpuRec: "Intel Core i7 3770 3.4 GHz / AMD FX-8350 4 GHz",
    gpuRec: "Nvidia GeForce GTX 770 / AMD Radeon R9 290",
    ramRec: "8 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    steamAppId: "292030",
    isSteam: true
  },
  {
    id: "hogwarts",
    titleAr: "تراث هوجورتس (Hogwarts Legacy)",
    titleEn: "Hogwarts Legacy",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2023",
    rating: "9.5",
    developer: "Avalanche Software",
    genreAr: "عالم سحري مفتوح / آر بي جي السحرة",
    genreEn: "Immersive Open World Action RPG",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
    badgeTextAr: "عالم هاري بوتر السحري",
    badgeTextEn: "Wizarding World",
    synopsisAr: "عش في قلعة هوجوورتس في القرن التاسع عشر. اصنع شخصيتك، تعلم التعاويذ السحرية، روض الوحوش السحرية، وقرر مصير عالم السحر.",
    synopsisEn: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books.",
    cpuMin: "Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)",
    gpuMin: "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
    ramMin: "16 GB",
    cpuRec: "Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)",
    gpuRec: "NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT",
    ramRec: "16 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
    steamAppId: "990080",
    isSteam: true
  },
  {
    id: "palworld",
    titleAr: "بال وورلد (Palworld)",
    titleEn: "Palworld",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2024",
    rating: "9.3",
    developer: "Pocketpair",
    genreAr: "صيد وحوش وبقاء / بوكيمون بالأسلحة",
    genreEn: "Monster-Catching Survival Crafting",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    badgeTextAr: "ظاهرة عام 2024",
    badgeTextEn: "Global Sensation",
    synopsisAr: "اجمع مخلوقات البال الغامضة، وقاتل بها أو استخدمها في بناء القلاع والزراعة والمصانع في عالم مفتوح شاسع مع أصدقائك عبر الإنترنت.",
    synopsisEn: "Fight, farm, build and work alongside mysterious creatures called Pals in this completely new multiplayer, open worlds survival and crafting game!",
    cpuMin: "i5-3570K 3.4 GHz 4 Core",
    gpuMin: "GeForce GTX 1050 (2GB)",
    ramMin: "16 GB",
    cpuRec: "i9-9900K 3.6 GHz 8 Core",
    gpuRec: "GeForce RTX 2070",
    ramRec: "32 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1623730/Palworld/",
    steamAppId: "1623730",
    isSteam: true
  },
  {
    id: "r6siege",
    titleAr: "رينبو 6 سيج (Rainbow Six Siege)",
    titleEn: "Tom Clancy's Rainbow Six® Siege",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2015 - 2024",
    rating: "9.3",
    developer: "Ubisoft Montreal",
    genreAr: "اقتحام تكتيكي وتدمير بيئي 5v5",
    genreEn: "Tactical Multiplayer Shooter",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/359550/header.jpg",
    badgeTextAr: "أسطورة الشوتر التكتيكي",
    badgeTextEn: "Tactical Legend",
    synopsisAr: "قم بالاقتحام أو الدفاع في مواجهات 5 ضد 5 محتدمة تتطلب التعاون العالي واستخدام أدوات التجسس وتدمير الجدران والأرضيات بشكل تكتيكي ذكي.",
    synopsisEn: "Master the art of destruction and gadgetry in Tom Clancy’s Rainbow Six Siege. Face intense close quarters combat, high lethality, and team strategy.",
    cpuMin: "Intel Core i3 560 @ 3.3 GHz or AMD Phenom II X4 945 @ 3.0 GHz",
    gpuMin: "NVIDIA GeForce GTX 460 or AMD Radeon HD 5870",
    ramMin: "6 GB",
    cpuRec: "Intel Core i5-2500K @ 3.3 GHz or better",
    gpuRec: "NVIDIA GeForce GTX 670 or AMD Radeon HD 7970",
    ramRec: "8 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/",
    steamAppId: "359550",
    isSteam: true
  },
  {
    id: "apexlegends",
    titleAr: "أبيكس ليجندز (Apex Legends)",
    titleEn: "Apex Legends",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2020 - 2024",
    rating: "9.2",
    developer: "Respawn Entertainment",
    genreAr: "باتل رويال أبطال سريع وإطلاق نار",
    genreEn: "Free-to-Play Hero Shooter",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
    badgeTextAr: "باتل رويال الخوارق",
    badgeTextEn: "Hero Shooter Hit",
    synopsisAr: "تنافس بشخصيات أسطورية تمتلك قدرات خارقة وتكتيكية في لعبة الباتل رويال الثورية والأسرع حركة في عالم الشوتر المجاني.",
    synopsisEn: "Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters battle for glory, fame, and fortune.",
    cpuMin: "AMD FX 4350 or Equivalent, Intel Core i3 6300 or Equivalent",
    gpuMin: "AMD Radeon HD 7730, NVIDIA GeForce GT 640",
    ramMin: "6 GB",
    cpuRec: "Ryzen 5 CPU or Equivalent, Intel Core i5 3570K or Equivalent",
    gpuRec: "AMD Radeon R9 290, NVIDIA GeForce GTX 970",
    ramRec: "8 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/1172470/Apex_Legends/",
    steamAppId: "1172470",
    isSteam: true
  },
  {
    id: "dota2",
    titleAr: "دوتا 2 (Dota 2)",
    titleEn: "Dota 2",
    series: "steam",
    category: ["steam", "competitive"],
    year: "2013 - 2024",
    rating: "9.4",
    developer: "Valve",
    genreAr: "موبا إلكترونية استراتيجية 5v5",
    genreEn: "Competitive Action Strategy MOBA",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg",
    badgeTextAr: "أسطورة الفالف الخالدة",
    badgeTextEn: "MOBA Titan",
    synopsisAr: "اللعبة التنافسية الأعمق عالمياً من فالف وبطولة The International. اختر من بين أكثر من 120 بطلاً في معارك استراتيجية 5v5 لا نهائية الاحتمالات.",
    synopsisEn: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. There's always a new strategy or tactic to discover.",
    cpuMin: "Dual core from Intel or AMD at 2.8 GHz",
    gpuMin: "NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600",
    ramMin: "4 GB",
    cpuRec: "Intel Core i5 or AMD Ryzen 5",
    gpuRec: "NVIDIA GeForce GTX 1060 / AMD RX 580",
    ramRec: "8 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/570/Dota_2/",
    steamAppId: "570",
    isSteam: true
  },
  {
    id: "eurotruck2",
    titleAr: "يورو تراك سيميولاتور 2 (Euro Truck 2)",
    titleEn: "Euro Truck Simulator 2",
    series: "steam",
    category: ["steam", "openworld"],
    year: "2012 - 2024",
    rating: "9.7",
    developer: "SCS Software",
    genreAr: "محاكاة قيادة شاحنات عبر أوروبا",
    genreEn: "Realistic Driving & Fleet Simulator",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg",
    badgeTextAr: "أعظم محاكي قيادة",
    badgeTextEn: "Top Rated Driving Sim",
    synopsisAr: "سافر عبر أوروبا كملك الطرقات، انقل البضائع المهمة عبر مسافات شاسعة، واستكشف عشرات المدن في بريطانيا، بلجيكا، ألمانيا، إيطاليا وغيرها.",
    synopsisEn: "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances!",
    cpuMin: "Intel Core i5-6400 or AMD Ryzen 3 1200 or similar",
    gpuMin: "NVIDIA GeForce GTX 660 or AMD Radeon RX 460",
    ramMin: "8 GB",
    cpuRec: "Intel Core i5-9600 or AMD Ryzen 5 3600 or similar",
    gpuRec: "NVIDIA GeForce GTX 1660 or AMD Radeon RX 590",
    ramRec: "12 GB",
    platforms: ["PC", "Steam"],
    playUrl: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    steamAppId: "227300",
    isSteam: true
  }
];

// Timeline Era metadata for Assassin's Creed
const AC_TIMELINE = [
  { eraAr: "مصر القديمة 49 ق.م", eraEn: "Ancient Egypt 49 BC", title: "Origins", heroAr: "بايك من سيوة", heroEn: "Bayek of Siwa", gameId: "ac_origins" },
  { eraAr: "اليونان القديمة 431 ق.م", eraEn: "Ancient Greece 431 BC", title: "Odyssey", heroAr: "كاساندرا / أليكسيوس", heroEn: "Kassandra / Alexios", gameId: "ac_odyssey" },
  { eraAr: "عصر الفايكنج 873 م", eraEn: "Viking Era 873 AD", title: "Valhalla", heroAr: "إيفور قبيلة الغراب", heroEn: "Eivor Raven Clan", gameId: "ac_valhalla" },
  { eraAr: "بغداد العباسية 861 م", eraEn: "Baghdad 861 AD", title: "Mirage", heroAr: "باسم بن إسحاق", heroEn: "Basim Ibn Ishaq", gameId: "ac_mirage" },
  { eraAr: "الأرض المقدسة 1191 م", eraEn: "Holy Land 1191 AD", title: "AC I", heroAr: "الطائر بن لا أحد", heroEn: "Altaïr Ibn-La'Ahad", gameId: "ac1" },
  { eraAr: "فلورنسا والنهضة 1476 م", eraEn: "Florence 1476 AD", title: "AC II", heroAr: "إزيو أوديتوري", heroEn: "Ezio Auditore", gameId: "ac2" },
  { eraAr: "روما الإيطالية 1499 م", eraEn: "Rome 1499 AD", title: "Brotherhood", heroAr: "المعلم إزيو", heroEn: "Mentor Ezio", gameId: "ac_brotherhood" },
  { eraAr: "القسطنطينية 1511 م", eraEn: "Constantinople 1511 AD", title: "Revelations", heroAr: "المرشد إزيو", heroEn: "Grandmaster Ezio", gameId: "ac_revelations" },
  { eraAr: "اليابان الإقطاعية 1579 م", eraEn: "Feudal Japan 1579 AD", title: "Shadows", heroAr: "ناوي و ياسوكي", heroEn: "Naoe & Yasuke", gameId: "ac_shadows" },
  { eraAr: "جزر الكاريبي 1715 م", eraEn: "Caribbean 1715 AD", title: "Black Flag", heroAr: "الكابتن إدوارد كينواي", heroEn: "Capt. Edward Kenway", gameId: "ac4_blackflag" },
  { eraAr: "شمال الأطلسي 1752 م", eraEn: "North Atlantic 1752 AD", title: "Rogue", heroAr: "شاي باتريك كورماك", heroEn: "Shay Patrick Cormac", gameId: "ac_rogue" },
  { eraAr: "الثورة الأمريكية 1775 م", eraEn: "American Revolution 1775", title: "AC III", heroAr: "كونور كينواي", heroEn: "Connor Kenway", gameId: "ac3" },
  { eraAr: "الثورة الفرنسية 1789 م", eraEn: "French Revolution 1789", title: "Unity", heroAr: "آرنو دوريان", heroEn: "Arno Dorian", gameId: "ac_unity" },
  { eraAr: "لندن الصناعية 1868 م", eraEn: "Victorian London 1868", title: "Syndicate", heroAr: "جاكوب وإيفي فراي", heroEn: "Jacob & Evie Frye", gameId: "ac_syndicate" }
];

// ==========================================
// 2. I18N BILINGUAL TRANSLATION DICTIONARY
// ==========================================
const I18N = {
  ar: {
    dir: "rtl",
    langCode: "ar",
    brandTitleEn: "GAMING PORTAL",
    navHome: "الرئيسية",
    navGames: "مكتبة الألعاب",
    navVal: "فالورانت",
    navGta: "عالم GTA",
    navAc: "أساسنز كريد",
    navRig: "السيت أب",
    navComm: "المجتمع",
    navAdmin: "لوحة الإدارة",
    navDiscord: "انضم للديسكورد",
    heroBadge1: "بوابة الجيمنج الاحترافية الرسمية",
    heroTitlePrefix: "مَرْحَباً بِكُمْ فِي مَمْلَكَة",
    heroTitleSuffix: "لِلجِيمِنْج",
    heroDesc: "وجهتكم الأولى لأقوى تجارب الألعاب التنافسية والعوالم المفتوحة. هنا ستجدون مكتبة شاملة تغطي تكتيكات فالورانت، ملحمة أسرار وعوالم GTA و Vice City، والرحلة الكاملة لجميع أجزاء Assassin's Creed التاريخية، مع استعراض أقوى عتاد الجيمنج.",
    heroBtnExplore: "استكشف مكتبة الألعاب",
    heroBtnRig: "مواصفات جهاز Al Khashab",
    heroBtnDiscord: "سيرفر الديسكورد",
    statGamesLabel: "لعبة أسطورية",
    gamesSectionTag: "GAME VAULT",
    gamesSectionTitle: "مكتبة الألعاب الاحترافية",
    gamesSectionDesc: "تصفح قائمة الألعاب المتاحة وتعرف على أحدث المواصفات، القصص، ومتطلبات التشغيل لكل لعبة.",
    searchPlaceholder: "ابحث عن لعبة (مثال: فالورانت، GTA، فالهالا، إزيو...)...",
    displayingPrefix: "يتم عرض",
    displayingSuffix: "لعبة مختارة",
    tabAll: "جميع الألعاب",
    tabVal: "فالورانت",
    tabGta: "سلسلة GTA",
    tabAc: "سلسلة Assassin's Creed الكاملة",
    tabOpen: "عالم مفتوح",
    tabSteam: "ألعاب Steam",
    tabComp: "ألعاب تنافسية",
    tabFavs: "ألعابي المفضلة",
    cardDetailsBtn: "تفاصيل اللعبة",
    valTitle: "مركز تكتيكات فالورانت الاحترافي",
    valDesc: "الدقة في التصويب ليست سوى البداية. في عالم فالورانت، كل جولة تتطلب تخطيطاً محكماً وتفكيراً استراتيجياً واستخداماً عبقرياً لقدرات الوكلاء لتحقيق الفوز وصعود سلم الرانك إلى الراديانت.",
    valBtnPlay: "حمّل والعب فالورانت مجاناً",
    valBtnSpecs: "مواصفات ومتطلبات التشغيل",
    valRosterTitle: "أبرز الوكلاء في التشكيلة",
    gtaTitle: "Grand Theft Auto VI",
    gtaDesc: "استعدوا للحدث الترفيهي الأضخم على الإطلاق. ولاية ليونيدا، قصة لوسيا وجيسون، وعالم مفتوح ينبض بالحياة بأدق التفاصيل والرسوم الجبارة التي تعيد تعريف الجيمنج عالمياً.",
    cdTitle: "العد التنازلي لإطلاق Grand Theft Auto VI:",
    cdDays: "أيام",
    cdHours: "ساعات",
    cdMins: "دقائق",
    cdSecs: "ثوانٍ",
    gtaBtn6: "تفاصيل وتوقعات Grand Theft Auto VI",
    gtaBtn5: "استعراض Grand Theft Auto VI",
    creedTitle: "رحلة عقيدة الحشاشين عبر العصور",
    creedDesc: "سلسلة ألعاب Assassin's Creed الكاملة مرتبة زمنياً وتاريخياً من مصر القديمة واليونان إلى بغداد واليابان الإقطاعية.",
    creedQuote: "لا شيء حقيقي.. كل شيء مباح",
    rigTitle: "مواصفات جهاز Al Khashab",
    rigDesc: "المواصفات والعتاد الاحترافي لتجميعة الألعاب والبث الخاصة بي لتشغيل أقوى ألعاب الجيل بأعلى إطارات وأفضل أداء.",
    commTitle: "انضم إلى مجتمع عشيرة الذئاب",
    commDesc: "تواصل مع Al Khashab وباقي اللاعبين، شارك في البطولات والسطوات، وتابع البثوث المباشرة يومياً.",
    commDiscordBtn: "انضم لسيرفر الديسكورد (اضغط هنا)",
    modalStoryTitle: "قصة اللعبة ومميزاتها",
    modalSpecsTitle: "متطلبات تشغيل اللعبة (System Requirements)",
    modalMinLabel: "الحد الأدنى للتشغيل (Minimum):",
    modalRecLabel: "الموصى به للأداء العالي (Recommended):",
    modalLaunchBtn: "الانتقال للمتجر أو اللعب الآن",
    modalCloseBtn: "إغلاق النافذة",
    emptyMsg: "لم يتم العثور على ألعاب مطابقة",
    emptySub: "جرّب البحث بكلمات أخرى أو اختر تبويباً مختلفاً من القائمة أعلاه",
    heroLabel: "البطل:"
  },
  en: {
    dir: "ltr",
    langCode: "en",
    brandTitleEn: "GAMING PORTAL",
    navHome: "Home",
    navGames: "Games Vault",
    navVal: "Valorant",
    navGta: "GTA Universe",
    navAc: "Assassin's Creed",
    navRig: "Battle Station",
    navComm: "Community",
    navAdmin: "Admin Portal",
    navDiscord: "Join Discord",
    heroBadge1: "Official Pro Gaming Portal",
    heroTitlePrefix: "WELCOME TO",
    heroTitleSuffix: "GAMING REALM",
    heroDesc: "Your ultimate destination for competitive esports and open-world masterpieces. Explore tactical Valorant guides, the legendary Grand Theft Auto universe, and the complete Assassin's Creed historical saga alongside our extreme battle station hardware.",
    heroBtnExplore: "Explore Games Vault",
    heroBtnRig: "Al Khashab Battle Rig",
    heroBtnDiscord: "Official Discord",
    statGamesLabel: "Legendary Games",
    gamesSectionTag: "GAME VAULT",
    gamesSectionTitle: "Professional Games Library",
    gamesSectionDesc: "Browse our curated collection with comprehensive specs, storylines, and system requirements for each title.",
    searchPlaceholder: "Search games (e.g. Valorant, GTA, Valhalla, Ezio...)...",
    displayingPrefix: "Showing",
    displayingSuffix: "Featured Games",
    tabAll: "All Games",
    tabVal: "Valorant",
    tabGta: "GTA Series",
    tabAc: "Assassin's Creed Full Saga",
    tabOpen: "Open World",
    tabSteam: "Steam Games",
    tabComp: "Competitive",
    tabFavs: "My Favorites",
    cardDetailsBtn: "View Details",
    valTitle: "Valorant Pro Tactical Center",
    valDesc: "Raw aim is only the baseline. In Valorant, every round demands sharp tactical strategy, utility synergy, and agent mastery to climb the ranks all the way to Radiant.",
    valBtnPlay: "Download & Play Free",
    valBtnSpecs: "System Specs & Requirements",
    valRosterTitle: "Meta Agent Roster",
    gtaTitle: "Grand Theft Auto VI",
    gtaDesc: "Get ready for the most monumental entertainment release in history. Leonida, Lucia & Jason's saga, and Vice City's neon glory reinvent open-world gaming.",
    cdTitle: "Live Countdown to Grand Theft Auto VI:",
    cdDays: "Days",
    cdHours: "Hours",
    cdMins: "Mins",
    cdSecs: "Secs",
    gtaBtn6: "Grand Theft Auto VI Highlights",
    gtaBtn5: "Explore Grand Theft Auto VI",
    creedTitle: "The Complete Creed Historical Saga",
    creedDesc: "The entire Assassin's Creed series chronologically cataloged from Ancient Egypt to Feudal Japan.",
    creedQuote: "Nothing is true, everything is permitted",
    rigTitle: "Al Khashab PC Specs",
    rigDesc: "Professional gaming battlestation and streaming rig specs built for peak performance, ultra-high framerates, and elite gameplay.",
    commTitle: "Join the Wolf Clan Community",
    commDesc: "Connect with Al Khashab and community members, participate in tournaments, heists, and live streams.",
    commDiscordBtn: "Join Official Discord (Click Here)",
    modalStoryTitle: "Synopsis & Highlights",
    modalSpecsTitle: "System Requirements",
    modalMinLabel: "Minimum Requirements:",
    modalRecLabel: "Recommended Specs:",
    modalLaunchBtn: "Play / Store Link",
    modalCloseBtn: "Close Window",
    emptyMsg: "No Matching Games Found",
    emptySub: "Try searching with different keywords or select another category above.",
    heroLabel: "Protagonist:"
  }
};

let currentLang = localStorage.getItem("alkhashab_lang") || "ar";

// ==========================================
// 3. SYNTHESIZED SOUND EFFECTS (Web Audio API)
// ==========================================
class SoundFX {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(650, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) {}
  }

  playFavorite() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.08);
      osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.16);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.32);
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================
// 4. FAVORITES MANAGEMENT
// ==========================================
const Favs = {
  get() {
    try {
      return JSON.parse(localStorage.getItem("alkhashab_fav_games") || "[]");
    } catch (e) {
      return [];
    }
  },
  toggle(id) {
    const list = this.get();
    const idx = list.indexOf(id);
    let active = false;
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(id);
      active = true;
    }
    localStorage.setItem("alkhashab_fav_games", JSON.stringify(list));
    return active;
  },
  has(id) {
    return this.get().includes(id);
  }
};

// ==========================================
// 5. RENDERING GAME CARDS & FILTERING (WITH LIVE STEAM STORE INTEGRATION)
// ==========================================
let currentFilter = "all";
let searchQuery = "";
let liveSteamGames = [];
let featuredSteamGames = [];
let isSteamFetching = false;

async function fetchLiveSteamFeatured() {
  try {
    let res;
    try {
      res = await fetch("/api/steam/featured");
      if (!res.ok) throw new Error("Local featured API failed");
    } catch (localErr) {
      res = await fetch("https://conf-conventional-pole-referral.trycloudflare.com/api/steam/featured");
    }
    const data = await res.json();
    if (data && data.items && data.items.length > 0) {
      featuredSteamGames = data.items.map(item => ({
        id: `steam_feat_${item.id}`,
        steamAppId: item.id,
        isSteam: true,
        isLiveSteam: true,
        titleAr: item.name,
        titleEn: item.name,
        series: "steam",
        category: ["steam", "openworld"],
        year: item.price || "Steam",
        rating: "9.6",
        developer: "Steam Top Seller",
        genreAr: item.price ? `متجر ستيم | ${item.price}` : "متجر ستيم الرسمي",
        genreEn: item.price ? `Steam Store | ${item.price}` : "Official Steam Store",
        image: item.image,
        badgeTextAr: "الأكثر مبيعاً على Steam",
        badgeTextEn: "Steam Top Seller",
        synopsisAr: `لعبة ${item.name} من الألعاب الأكثر مبيعاً والأعلى لعباً على منصة Steam العالمية الآن. متاحة بكامل المواصفات والتشغيل الفوري.`,
        synopsisEn: `${item.name} is one of the top trending games on Steam right now. Available with full specs and instant launch.`,
        cpuMin: "راجع متطلبات صفحة Steam الرسمية",
        gpuMin: "DirectX 11 / 12 متوافق",
        ramMin: "8 GB",
        cpuRec: "معالج ألعاب سداسي النواة حديث",
        gpuRec: "NVIDIA GeForce RTX / AMD Radeon RX",
        ramRec: "16 GB",
        platforms: ["PC", "Steam"],
        playUrl: item.steamUrl,
        steamLaunchUrl: item.steamLaunchUrl
      }));
      renderGames();
    }
  } catch (err) {
    console.warn("Featured Steam games note:", err);
  }
}

async function fetchLiveSteamSearch(query) {
  if (!query || query.trim().length < 2) {
    liveSteamGames = [];
    isSteamFetching = false;
    renderGames();
    return;
  }

  isSteamFetching = true;
  try {
    let res;
    try {
      res = await fetch(`/api/steam/search?term=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Local API failed");
    } catch (localErr) {
      // Fallback to Cloudflare Tunnel endpoint for static hosting like GitHub Pages
      res = await fetch(`https://conf-conventional-pole-referral.trycloudflare.com/api/steam/search?term=${encodeURIComponent(query)}`);
    }
    const data = await res.json();
    if (data && data.items && data.items.length > 0) {
      liveSteamGames = data.items.map(item => ({
        id: `steam_${item.id}`,
        steamAppId: item.id,
        isSteam: true,
        isLiveSteam: true,
        titleAr: item.name,
        titleEn: item.name,
        series: "steam",
        category: ["steam", "openworld"],
        year: item.price || "Steam",
        rating: item.metascore || "9.5",
        developer: "Steam Store",
        genreAr: item.price ? `متجر ستيم | ${item.price}` : "متجر ستيم الرسمي",
        genreEn: item.price ? `Steam Store | ${item.price}` : "Official Steam Store",
        image: item.image,
        badgeTextAr: "متجر Steam الحي",
        badgeTextEn: "Live Steam Game",
        synopsisAr: `لعبة ${item.name} متاحة الآن عبر متجر Steam الرسمي. اضغط لعرض التفاصيل الكاملة، متطلبات التشغيل، والتشغيل الفوري.`,
        synopsisEn: `${item.name} available live on Steam Store. Click for full system specs, store overview, and instant launch.`,
        cpuMin: "راجع متطلبات صفحة Steam الرسمية",
        gpuMin: "DirectX 11 / 12 متوافق",
        ramMin: "8 GB",
        cpuRec: "معالج ألعاب سداسي النواة حديث",
        gpuRec: "NVIDIA GeForce RTX / AMD Radeon RX",
        ramRec: "16 GB",
        platforms: ["PC", "Steam"],
        playUrl: item.steamUrl,
        steamLaunchUrl: item.steamLaunchUrl
      }));
    } else {
      liveSteamGames = [];
    }
  } catch (err) {
    console.warn("Live Steam Search fallback:", err);
  } finally {
    isSteamFetching = false;
    renderGames();
  }
}

function renderGames() {
  const grid = document.getElementById("gamesGrid");
  const countEl = document.getElementById("gamesCount");
  if (!grid) return;

  const t = I18N[currentLang];
  const isEn = currentLang === "en";

  // Merge static database with live Steam featured games and search results
  let combinedList = [...GAMES_DATA];

  if (featuredSteamGames.length > 0) {
    const existingIds = new Set(combinedList.map(g => String(g.steamAppId || g.id)));
    const uniqueFeatured = featuredSteamGames.filter(fg => !existingIds.has(String(fg.steamAppId)));
    combinedList = [...combinedList, ...uniqueFeatured];
  }

  if (searchQuery.trim().length >= 2 && liveSteamGames.length > 0) {
    const existingIds = new Set(combinedList.map(g => String(g.steamAppId || g.id)));
    const uniqueLiveSteam = liveSteamGames.filter(sg => !existingIds.has(String(sg.steamAppId)));
    combinedList = [...combinedList, ...uniqueLiveSteam];
  }

  // Update Steam count badge dynamically
  const steamBadge = document.getElementById("steamCountBadge");
  if (steamBadge) {
    const steamCount = combinedList.filter(g => g.series === "steam" || (g.category && g.category.includes("steam"))).length;
    steamBadge.textContent = `${steamCount} Live`;
  }

  const filtered = combinedList.filter(g => {
    const matchesFilter = (currentFilter === "all") ||
      (currentFilter === "favorites" ? Favs.has(g.id) : (g.series === currentFilter || g.category.includes(currentFilter)));

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q ||
      g.titleAr.toLowerCase().includes(q) ||
      g.titleEn.toLowerCase().includes(q) ||
      g.developer.toLowerCase().includes(q) ||
      g.genreAr.toLowerCase().includes(q) ||
      g.genreEn.toLowerCase().includes(q) ||
      g.year.includes(q);

    return matchesFilter && matchesSearch;
  });

  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-games-message">
        <i class="fa-solid fa-gamepad"></i>
        <h3>${t.emptyMsg}</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">${t.emptySub}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(game => {
    const isFav = Favs.has(game.id);
    const title = isEn ? game.titleEn : game.titleAr;
    const badge = isEn ? game.badgeTextEn : game.badgeTextAr;
    const synopsis = isEn ? game.synopsisEn : game.synopsisAr;

    const platformIcons = game.platforms.map(p => {
      if (p === "PC") return '<i class="fa-brands fa-windows" title="PC Windows"></i>';
      if (p.includes("PS")) return '<i class="fa-brands fa-playstation" title="PlayStation"></i>';
      if (p.includes("Xbox")) return '<i class="fa-brands fa-xbox" title="Xbox"></i>';
      if (p === "Steam") return '<i class="fa-brands fa-steam" title="Steam"></i>';
      return '';
    }).join(' ');

    const favTooltip = isFav ? (isEn ? "Remove from Favorites" : "إزالة من المفضلة") : (isEn ? "Add to Favorites" : "إضافة إلى المفضلة");
    const arrowIcon = isEn ? "fa-arrow-right" : "fa-arrow-left";
    const steamBadge = (game.isSteam || game.category.includes('steam'))
      ? `<span class="card-steam-badge"><i class="fa-brands fa-steam"></i> Steam</span>`
      : '';

    return `
      <article class="game-card" data-id="${game.id}">
        <div class="card-media">
          <img src="${game.image}" alt="${title}" class="card-thumb" loading="lazy" onerror="this.src='assets/hero.jpg'">
          <div class="card-gradient-overlay"></div>
          
          <div class="card-badges-top">
            <span class="card-badge-rating">
              <i class="fa-solid fa-star"></i> ${game.rating}
            </span>
            <span class="card-badge-series">${badge}</span>
          </div>

          ${steamBadge}

          <button class="card-fav-btn ${isFav ? 'active' : ''}" 
                  data-fav-id="${game.id}" 
                  title="${favTooltip}" 
                  aria-label="Favorite">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>

        <div class="card-content">
          <div class="card-meta-row">
            <span>${game.developer}</span>
            <span class="gaming-font">${game.year}</span>
          </div>

          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${synopsis}</p>

          <div class="card-footer">
            <div class="card-platforms">
              ${platformIcons}
            </div>
            <button class="btn-card-details" onclick="openGameModal('${game.id}')">
              <span>${t.cardDetailsBtn}</span>
              <i class="fa-solid ${arrowIcon}"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach favorite listeners
  grid.querySelectorAll(".card-fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-fav-id");
      const active = Favs.toggle(id);
      sfx.playFavorite();
      btn.classList.toggle("active", active);
      btn.innerHTML = `<i class="fa-${active ? 'solid' : 'regular'} fa-heart"></i>`;
      if (currentFilter === "favorites") {
        renderGames();
      }
    });
  });
}

// ==========================================
// 6. TIMELINE RENDER FOR ASSASSIN'S CREED
// ==========================================
function renderCreedTimeline() {
  const track = document.getElementById("timelineTrack");
  if (!track) return;

  const isEn = currentLang === "en";
  const heroLabel = isEn ? "Protagonist:" : "البطل:";
  const viewLabel = isEn ? "Explore Era" : "استعراض الحقبة";

  track.innerHTML = AC_TIMELINE.map(item => {
    const game = GAMES_DATA.find(g => g.id === item.gameId);
    const img = game ? game.image : 'assets/games/ac1.jpg';
    const era = isEn ? item.eraEn : item.eraAr;
    const hero = isEn ? item.heroEn : item.heroAr;

    return `
      <div class="timeline-node-card">
        <img src="${img}" alt="${item.title}" class="node-thumb" loading="lazy">
        <div class="node-body">
          <span class="node-era-badge">${era}</span>
          <h4 class="node-title">${item.title}</h4>
          <p class="node-protagonist">${heroLabel} <strong>${hero}</strong></p>
          <button class="btn-node-view" onclick="openGameModal('${item.gameId}')">
            <i class="fa-solid fa-eye"></i> ${viewLabel}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 7. GAME DETAIL MODAL
// ==========================================
function openGameModal(gameId) {
  sfx.playClick();
  const game = GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  const modal = document.getElementById("gameModal");
  if (!modal) return;

  const isEn = currentLang === "en";
  const title = isEn ? game.titleEn : `${game.titleAr} (${game.titleEn})`;
  const badge = isEn ? game.badgeTextEn : game.badgeTextAr;
  const genre = isEn ? game.genreEn : game.genreAr;
  const synopsis = isEn ? game.synopsisEn : game.synopsisAr;

  document.getElementById("modalImg").src = game.image;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalYear").textContent = game.year;
  document.getElementById("modalRating").textContent = `★ ${game.rating}/10`;
  document.getElementById("modalDeveloper").textContent = game.developer;
  document.getElementById("modalGenre").textContent = genre;
  document.getElementById("modalSynopsis").textContent = synopsis;

  document.getElementById("modalCpuMin").textContent = game.cpuMin;
  document.getElementById("modalGpuMin").textContent = game.gpuMin;
  document.getElementById("modalRamMin").textContent = game.ramMin;

  document.getElementById("modalCpuRec").textContent = game.cpuRec;
  document.getElementById("modalGpuRec").textContent = game.gpuRec;
  document.getElementById("modalRamRec").textContent = game.ramRec;

  const playBtn = document.getElementById("modalPlayBtn");
  if (playBtn) {
    playBtn.href = game.playUrl || "#";
    if (game.isSteam || game.category.includes('steam')) {
      playBtn.innerHTML = `<i class="fa-brands fa-steam"></i> <span>${isEn ? "Open in Steam Store" : "فتح في متجر Steam"}</span>`;
    } else {
      playBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> <span>${t.modalLaunchBtn}</span>`;
    }
  }

  const steamLaunchBtn = document.getElementById("modalSteamLaunchBtn");
  if (steamLaunchBtn) {
    if (game.steamAppId || game.steamLaunchUrl) {
      steamLaunchBtn.style.display = "inline-flex";
      steamLaunchBtn.href = game.steamLaunchUrl || `steam://run/${game.steamAppId}`;
    } else {
      steamLaunchBtn.style.display = "none";
    }
  }

  const tagsEl = document.getElementById("modalTags");
  if (tagsEl) {
    tagsEl.innerHTML = `
      <span class="modal-tag">${badge}</span>
      <span class="modal-tag">${game.developer}</span>
      <span class="modal-tag">${game.platforms.join(" • ")}</span>
    `;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGameModal() {
  sfx.playClick();
  const modal = document.getElementById("gameModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================
// 8. LANGUAGE SWITCHER IMPLEMENTATION
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("alkhashab_lang", lang);
  const t = I18N[lang];

  // Set HTML attributes
  document.documentElement.lang = t.langCode;
  document.documentElement.dir = t.dir;

  // Toggle button label
  const langLabel = document.getElementById("langLabel");
  if (langLabel) {
    langLabel.textContent = lang === "ar" ? "EN" : "عربي";
  }

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  // Re-render games and timeline
  renderGames();
  renderCreedTimeline();
}

// ==========================================
// 9. GTA 6 COUNTDOWN TIMER
// ==========================================
function startGtaCountdown() {
  // Official Rockstar release window: Fall season (November 17)
  const currentDate = new Date();
  let releaseYear = currentDate.getFullYear();
  let target = new Date(`${releaseYear}-11-17T00:00:00`);
  if (target.getTime() - currentDate.getTime() < 1000 * 60 * 60 * 24 * 45) {
    target = new Date(`${releaseYear + 1}-11-17T00:00:00`);
  }
  const targetDate = target.getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("cdDays").textContent = "00";
      document.getElementById("cdHours").textContent = "00";
      document.getElementById("cdMins").textContent = "00";
      document.getElementById("cdSecs").textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById("cdDays");
    const hEl = document.getElementById("cdHours");
    const mEl = document.getElementById("cdMins");
    const sEl = document.getElementById("cdSecs");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(mins).padStart(2, "0");
    if (sEl) sEl.textContent = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 10. CANVAS PARTICLES ANIMATION
// ==========================================
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = Math.min(60, Math.floor(window.innerWidth / 25));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: Math.random() > 0.4 ? "rgba(168, 85, 247, " : "rgba(236, 72, 153, ",
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#a855f7";
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

// ==========================================
// 11. EVENT LISTENERS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initParticles();

  // Initial language setup
  setLanguage(currentLang);

  startGtaCountdown();

  // Load featured Steam store games into library
  fetchLiveSteamFeatured();

  // Language toggle button listener
  const langToggleBtn = document.getElementById("langToggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      sfx.playClick();
      const nextLang = currentLang === "ar" ? "en" : "ar";
      setLanguage(nextLang);
    });
  }

  // Filter tabs click
  const tabBtns = document.querySelectorAll(".filter-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sfx.playClick();
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderGames();
    });
  });

  window.selectSteamFilter = function() {
    const steamBtn = document.querySelector('.filter-tab-btn[data-filter="steam"]');
    if (steamBtn) {
      steamBtn.click();
    } else {
      currentFilter = "steam";
      renderGames();
    }
    const gamesEl = document.getElementById("games");
    if (gamesEl) gamesEl.scrollIntoView({ behavior: "smooth" });
  };

  // Search input with debounce and live Steam search integration
  const searchInput = document.getElementById("gameSearchInput");
  if (searchInput) {
    let debounceTimer;
    let steamDebounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      clearTimeout(steamDebounceTimer);
      const val = e.target.value;
      debounceTimer = setTimeout(() => {
        searchQuery = val;
        renderGames();
      }, 120);

      // Trigger live Steam search across millions of games if 2+ letters
      steamDebounceTimer = setTimeout(() => {
        if (val.trim().length >= 2) {
          fetchLiveSteamSearch(val);
        } else {
          liveSteamGames = [];
          renderGames();
        }
      }, 400);
    });
  }

  // Navbar scroll detection
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      backToTop?.classList.add("visible");
    } else {
      backToTop?.classList.remove("visible");
    }
  });

  backToTop?.addEventListener("click", () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      sfx.playClick();
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Audio mute/unmute button
  const audioBtn = document.getElementById("audioToggle");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      const active = sfx.toggle();
      audioBtn.classList.toggle("muted", !active);
      audioBtn.title = active ? "Mute Sound FX" : "Unmute Sound FX";
      if (active) sfx.playClick();
    });
  }

  // Close modal on click outside or escape
  const modal = document.getElementById("gameModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeGameModal();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeGameModal();
      }
    });
  }

  // Add click sound to all interactive elements
  document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach(b => {
    b.addEventListener("click", () => sfx.playClick());
  });
});
