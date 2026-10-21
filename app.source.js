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
    titleEn: "Grand Theft Auto VI",
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
    gtaBtn6: "تفاصيل وتوقعات GTA VI",
    gtaBtn5: "استعراض GTA V & Online",
    creedTitle: "رحلة عقيدة الحشاشين عبر العصور",
    creedDesc: "سلسلة ألعاب Assassin's Creed الكاملة مرتبة زمنياً وتاريخياً من مصر القديمة واليونان إلى بغداد واليابان الإقطاعية.",
    creedQuote: "لا شيء حقيقي.. كل شيء مباح",
    rigTitle: "أقوى جهاز ألعاب في العالم - Al Khashab God-Tier Rig",
    rigDesc: "وحش الأداء الخارق بلا منازع - تجميعة الأحلام الأقوى عالمياً لكسر أرقام قياسية في الأداء بدقة 8K ومعدل إطارات يتجاوز 240FPS مع تبريد مائي مخصص وإضاءة نيون بنفسجية متزامنة.",
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
    gtaBtn6: "GTA VI Highlights",
    gtaBtn5: "Explore GTA V & Online",
    creedTitle: "The Complete Creed Historical Saga",
    creedDesc: "The entire Assassin's Creed series chronologically cataloged from Ancient Egypt to Feudal Japan.",
    creedQuote: "Nothing is true, everything is permitted",
    rigTitle: "World's Most Powerful Battlestation - Al Khashab God-Tier Rig",
    rigDesc: "The undisputed performance monster - world-record breaking specs powering 8K gaming at 200+ FPS with custom hard-tube liquid cooling and synchronized cyber purple lighting.",
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
// 5. RENDERING GAME CARDS & FILTERING
// ==========================================
let currentFilter = "all";
let searchQuery = "";

function renderGames() {
  const grid = document.getElementById("gamesGrid");
  const countEl = document.getElementById("gamesCount");
  if (!grid) return;

  const t = I18N[currentLang];
  const isEn = currentLang === "en";

  const filtered = GAMES_DATA.filter(g => {
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
      return '';
    }).join(' ');

    const favTooltip = isFav ? (isEn ? "Remove from Favorites" : "إزالة من المفضلة") : (isEn ? "Add to Favorites" : "إضافة إلى المفضلة");
    const arrowIcon = isEn ? "fa-arrow-right" : "fa-arrow-left";

    return `
      <article class="game-card" data-id="${game.id}">
        <div class="card-media">
          <img src="${game.image}" alt="${title}" class="card-thumb" loading="lazy">
          <div class="card-gradient-overlay"></div>
          
          <div class="card-badges-top">
            <span class="card-badge-rating">
              <i class="fa-solid fa-star"></i> ${game.rating}
            </span>
            <span class="card-badge-series">${badge}</span>
          </div>

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
// 9. GTA VI COUNTDOWN TIMER
// ==========================================
function startGtaCountdown() {
  const targetDate = new Date("2026-10-25T00:00:00").getTime();

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

  // Search input with debounce
  const searchInput = document.getElementById("gameSearchInput");
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        renderGames();
      }, 180);
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
