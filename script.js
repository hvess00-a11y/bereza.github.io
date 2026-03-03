// ===== STATE =====
let currentLang = 'ru';
let currentPage = 'home';

// ===== I18N STRINGS =====
const T = {
  ru: {
    cookieTitle: 'Добро пожаловать в Bereza Studio',
    cookieDescHTML: 'Мы используем <a href="https://policies.google.com/technologies/cookies" target="_blank">файлы cookie</a> для корректной работы сайта. Продолжая, вы соглашаетесь с их использованием.',
    cookieContinue: 'Продолжить',
    cookiePP: 'Нажимая кнопку, вы принимаете нашу',
    navHome: 'Главная', navMaps: 'Карты', navInstall: 'Установка', navSettings: 'Настройки', navFaq: 'FAQ',
    heroBadge: 'Minecraft Карты',
    heroTitle: 'Minecraft карты<br>на <span>прохождение</span>',
    heroSub: 'Bereza Studio — Небольшая команда мап‑мейкеров.',
    scrollHint: 'Листать вниз',
    honorTitle: 'Доска Почёта', honorSub: 'Люди, которые поддержали нас',
    honorDonates: 'Донаты', honorStreamers: 'Twitch-Стримеры', honorOthers: 'Остальные',
    teamTitle: 'Наша Команда', teamSub: 'Основатели, участники и голоса',
    teamFounders: 'Основатели и Руководство',
    teamVoiceRU: 'Озвучка (RU)', teamVoiceEN: 'Озвучка (EN)',
    mapsTitle: 'Карты', mapsSub: 'Все наши проекты в одном месте',
    tabReleased: 'Готовые', tabComing: 'В разработке',
    nepDesc: 'Проект «Нептун» — атмосферная сюжетная карта в стиле советской ретрофутуристики. Вы — Виктор, объект секретного эксперимента, очнувшийся в подводном комплексе «Нептун» после катастрофы. Вас ждут заброшенные лаборатории, советские технологии и опасные встречи с теми, кто знает о вас больше, чем вы сами. Присутствует озвучка и кат-сцены.',
    rrDesc: 'Roadside Restaurant — хоррор-карта на 1–4 игроков. Вы попадаете в странный ресторан, где таинственный человек уводит вас в подвал. Проходит 20 лет… и начинается борьба за выживание. Ищите выход, читайте записки, встречайте выживших. Присутствуют озвучка и кат-сцены.',
    fidDesc: 'Погрузитесь в Гиблое место — развалины подземелий, где Долг и Световая Гниль стали единственной реальностью. Вы — Артём «Ловчий» Поляков, должны найти Артефакт для «ПЕРЕЗАГРУЗКИ» мира. Напряжённая сюжетная миссия с полной озвучкой, кат-сценами и двумя нелинейными концовками.',
    nepTrailerEmpty: 'Трейлеры пока не добавлены — скоро!',
    videoNote: 'Прохождения сделаны сторонними авторами, а не нашей командой.',
    btnTrailer: 'Трейлер',
    mapInnerTabs: ['Галерея', 'Трейлеры', 'Прохождения', 'Скачать'],
    installTitle: 'Установка', installSub: 'Выберите свой лаунчер или платформу',
    tl1: 'Откройте TLauncher и нажмите кнопку «Папка» в нижней панели.',
    tl2: 'В открывшейся директории перейдите в папку <strong>saves</strong>.',
    tl3: 'Распакуйте архив карты и переместите <strong>папку мира</strong> в <strong>saves</strong>. Перемещайте именно папку мира, а не её содержимое.',
    tl4: 'Запустите игру, проверьте соответствие версии карты и вашей версии Minecraft, выберите мир в меню «Одиночная игра».',
    win1: 'Нажмите <strong>Win + R</strong>, чтобы открыть окно «Выполнить».',
    win2: 'Введите следующий путь и нажмите Enter:',
    win3: 'Откройте папку <strong>saves</strong>.',
    win4: 'Распакуйте архив карты и переместите <strong>папку мира</strong> в <strong>saves</strong>.',
    win5: 'Запустите игру и проверьте соответствие версии карты версии клиента.',
    mac1: 'В Finder нажмите <strong>Cmd + Shift + G</strong>, чтобы открыть «Перейти к папке…».',
    mac2: 'Введите следующий путь и подтвердите:',
    mac3: 'Откройте папку <strong>saves</strong>.',
    mac4: 'Распакуйте архив карты и переместите <strong>папку мира</strong> в <strong>saves</strong>.',
    mac5: 'Запустите игру и проверьте соответствие версии карты версии клиента.',
    settingsTitle: 'Настройки', settingsSub: 'Персонализация сайта',
    setLangTitle: 'Язык', setLangLabel: 'Язык интерфейса',
    setThemeTitle: 'Тема', setThemeLabel: 'Цветовая схема',
    setAnimTitle: 'Анимации', setAnimLabel: 'Эффекты и анимации', setGlowLabel: 'Неоновое свечение',
    setAboutTitle: 'О сайте', setVerLabel: 'Версия', setPPLabel: 'Политика конф.',
    faqSub: 'Часто задаваемые вопросы',
    footerDesc: 'Небольшая команда мап‑мейкеров, создающих атмосферные карты для Minecraft.',
    footerContactsTitle: 'Контакты', footerNavTitle: 'Навигация',
    footerDevNote: 'Со-разработчик / FAQ',
    footerCopy: '© Bereza Studio — все права защищены. 2026',
    footerWWF: 'Поддержать WWF', footerDonate: 'Донатик <3',
    shareToast: 'Ссылка скопирована!',
    comingSoon: 'СКОРО',
    faqItems: [
      { q: 'Кто вы такие?', a: 'Bereza Studio — небольшая команда единомышленников, создающая карты, моды и текстур‑паки на чистом энтузиазме.' },
      { q: 'Как долго вы существуете?', a: 'До Bereza Studio были инди‑карты от Boeriss, затем студия Still‑Mine (≈1,5 года). После перестройки появилась Bereza Studio.' },
      { q: 'Сколько людей в команде?', a: 'Состав команды указан в разделе «Наша команда».' },
      { q: 'Могу ли я играть ваши карты без модов?', a: 'Да. Все наши карты работают без модов.' },
      { q: 'Можно ли поддержать проект или помочь тестированием?', a: 'Да. Перейдите во вкладку «Карты» и пролистайте вниз — там есть кнопка для поддержки. По вопросам тестирования пишите в Telegram.' },
      { q: 'Можно ли попасть в команду и какие требования?', a: 'Напишите нам в Telegram.' },
      { q: 'На каких версиях Minecraft работают ваши проекты?', a: 'Поддерживаем версии 1.20–1.2x (1.20, 1.21, 1.22…). Конкретная версия указана в описании каждой карты.' },
      { q: 'Вы правда помогаете природе (WWF)?', a: 'Да, нам небезразлична судьба планеты. Мы перечисляем часть средств с донатов во Всемирный фонд дикой природы (WWF). Вы также можете поддержать их напрямую — <a href="https://www.wwf.de/spenden-helfen/allgemeine-spende" target="_blank">перейдите на сайт WWF</a>.' }
    ]
  },
  en: {
    cookieTitle: 'Welcome to Bereza Studio',
    cookieDescHTML: 'We use <a href="https://policies.google.com/technologies/cookies" target="_blank">cookies</a> to ensure the website works correctly. By continuing, you agree to their use.',
    cookieContinue: 'Continue',
    cookiePP: 'By clicking the button, you accept our',
    navHome: 'Home', navMaps: 'Maps', navInstall: 'Install', navSettings: 'Settings', navFaq: 'FAQ',
    heroBadge: 'Minecraft Maps',
    heroTitle: 'Minecraft <span>adventure</span><br>maps',
    heroSub: 'Bereza Studio — A small team of map-makers.',
    scrollHint: 'Scroll down',
    honorTitle: 'Hall of Fame', honorSub: 'People who supported us',
    honorDonates: 'Donations', honorStreamers: 'Twitch Streamers', honorOthers: 'Others',
    teamTitle: 'Our Team', teamSub: 'Founders, members & voice actors',
    teamFounders: 'Founders & Management',
    teamVoiceRU: 'Voice (RU)', teamVoiceEN: 'Voice (EN)',
    mapsTitle: 'Maps', mapsSub: 'All our projects in one place',
    tabReleased: 'Released', tabComing: 'Coming Soon',
    nepDesc: 'Project Neptune is an atmospheric story-driven map in a Soviet retro-futuristic style. You are Victor, a subject of a secret experiment, awakening in the underwater complex Neptune after a disaster. Abandoned laboratories, Soviet technology, and dangerous encounters await. Voice acting and cutscenes included.',
    rrDesc: 'Roadside Restaurant is a horror map for 1–4 players. You end up in a strange diner where a mysterious figure leads you to the basement. 20 years pass… and the fight for survival begins. Find the exit, read notes, meet survivors. Voice acting and cutscenes included.',
    fidDesc: 'Dive into the Cursed Place — dungeon ruins where Duty and Light Rot are the only reality. You are Artyom "Lovchy" Polyakov, tasked with finding an Artifact for a world RESET. Intense story mission with full voice acting, cutscenes, and two non-linear endings.',
    nepTrailerEmpty: 'No trailers yet — coming soon!',
    videoNote: 'Playthroughs are made by third-party creators, not our team.',
    btnTrailer: 'Trailer',
    mapInnerTabs: ['Gallery', 'Trailers', 'Playthroughs', 'Download'],
    installTitle: 'Installation', installSub: 'Choose your launcher or platform',
    tl1: 'Open TLauncher and click the <strong>Folder</strong> button in the bottom panel.',
    tl2: 'In the opened directory, navigate to the <strong>saves</strong> folder.',
    tl3: 'Extract the map archive and move the <strong>world folder</strong> into <strong>saves</strong>. Move the folder itself, not its contents.',
    tl4: 'Launch the game, verify the map version matches your Minecraft version, and select the world in Singleplayer.',
    win1: 'Press <strong>Win + R</strong> to open the Run dialog.',
    win2: 'Enter the following path and press Enter:',
    win3: 'Open the <strong>saves</strong> folder.',
    win4: 'Extract the map archive and move the <strong>world folder</strong> into <strong>saves</strong>.',
    win5: 'Launch the game and verify the map version matches your client version.',
    mac1: 'In Finder, press <strong>Cmd + Shift + G</strong> to open "Go to Folder…".',
    mac2: 'Enter the following path and confirm:',
    mac3: 'Open the <strong>saves</strong> folder.',
    mac4: 'Extract the map archive and move the <strong>world folder</strong> into <strong>saves</strong>.',
    mac5: 'Launch the game and verify the map version matches your client version.',
    settingsTitle: 'Settings', settingsSub: 'Customize the site',
    setLangTitle: 'Language', setLangLabel: 'Interface language',
    setThemeTitle: 'Theme', setThemeLabel: 'Color scheme',
    setAnimTitle: 'Animations', setAnimLabel: 'Effects & animations', setGlowLabel: 'Neon glow',
    setAboutTitle: 'About', setVerLabel: 'Version', setPPLabel: 'Privacy Policy',
    faqSub: 'Frequently Asked Questions',
    footerDesc: 'A small team of map-makers creating atmospheric Minecraft maps.',
    footerContactsTitle: 'Contacts', footerNavTitle: 'Navigation',
    footerDevNote: 'Co-developer / FAQ',
    footerCopy: '© Bereza Studio — All rights reserved. 2026',
    footerWWF: 'Support WWF', footerDonate: 'Donate <3',
    shareToast: 'Link copied!',
    comingSoon: 'COMING SOON',
    faqItems: [
      { q: 'Who are you?', a: 'Bereza Studio is a small team of enthusiasts creating maps, mods, and texture packs purely out of passion.' },
      { q: 'How long have you existed?', a: 'Before Bereza Studio there were indie maps by Boeriss, then the studio Still‑Mine (≈1.5 years). After restructuring, Bereza Studio was born.' },
      { q: 'How many people are on the team?', a: 'The team roster is listed in the "Our Team" section.' },
      { q: 'Can I play your maps without mods?', a: 'Yes. All our maps work without any mods.' },
      { q: 'Can I support the project or help with testing?', a: "Yes. Go to the Maps tab and scroll down — there's a support button. For testing inquiries, message us on Telegram." },
      { q: 'Can I join the team and what are the requirements?', a: 'Message us on Telegram.' },
      { q: 'Which Minecraft versions are your maps for?', a: 'We support versions 1.20–1.2x (1.20, 1.21, 1.22…). The specific version is listed in each map\'s description.' },
      { q: 'Do you really help nature (WWF)?', a: 'Yes, we care about the planet. We donate a portion of the funds to the WWF. You can also support them directly — <a href="https://www.wwf.de/spenden-helfen/allgemeine-spende" target="_blank">visit the WWF website</a>.' }
    ]
  }
};

// ===== HELPERS =====
function setTxt(id, v) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = v;
}
function setTxtAll(selector, v) {
  document.querySelectorAll(selector).forEach(el => el.innerHTML = v);
}

// ===== APPLY LANGUAGE =====
function applyLang(lang) {
  const t = T[lang];
  currentLang = lang;

  // Cookie
  setTxt('cookie-title-text', t.cookieTitle);
  setTxt('cookie-desc', t.cookieDescHTML);
  const cb = document.getElementById('cookie-btn'); if (cb) cb.textContent = t.cookieContinue;
  setTxt('cookie-pp-text', t.cookiePP);

  // Nav
  setTxt('nav-en-home', t.navHome); setTxt('nav-en-maps', t.navMaps);
  setTxt('nav-en-install', t.navInstall); setTxt('nav-en-settings', t.navSettings);
  setTxt('nav-en-faq', t.navFaq);

  // Hero
  setTxt('hero-badge-text', t.heroBadge);
  setTxt('hero-title', t.heroTitle);
  setTxt('hero-sub', t.heroSub);
  setTxt('scroll-hint-text', t.scrollHint);

  // Honor
  setTxt('honor-title', t.honorTitle); setTxt('honor-sub', t.honorSub);
  setTxt('honor-donates', t.honorDonates); setTxt('honor-streamers', t.honorStreamers);
  setTxt('honor-others', t.honorOthers);

  // Team
  setTxt('team-title', t.teamTitle); setTxt('team-sub', t.teamSub);
  setTxt('team-founders-label', t.teamFounders);
  setTxt('team-voice-ru-label', t.teamVoiceRU);
  setTxt('team-voice-en-label', t.teamVoiceEN);

  // Maps
  setTxt('maps-title', t.mapsTitle); setTxt('maps-sub', t.mapsSub);
  setTxt('tab-released', t.tabReleased); setTxt('tab-coming', t.tabComing);
  setTxt('nep-desc', t.nepDesc); setTxt('rr-desc', t.rrDesc); setTxt('fid-desc', t.fidDesc);
  setTxt('nep-trailer-empty', t.nepTrailerEmpty);
  setTxtAll('.video-note', `<i class="fa-solid fa-circle-info" style="margin-right:6px;color:var(--teal)"></i>${t.videoNote}`);
  setTxt('btn-trailer', t.btnTrailer);

  // Map inner tab labels
  const tabKeys = ['gallery', 'trailers', 'playthroughs', 'downloads'];
  ['nep', 'rr'].forEach(prefix => {
    tabKeys.forEach((k, i) => setTxt(`${prefix}-tab-${k}`, t.mapInnerTabs[i]));
  });

  // coming soon badge
  document.querySelectorAll('.coming-card').forEach(el => {
    el.style.setProperty('--coming-label', `"${t.comingSoon}"`);
  });

  // Install
  setTxt('install-title', t.installTitle); setTxt('install-sub', t.installSub);
  setTxt('tl-step1', t.tl1); setTxt('tl-step2', t.tl2);
  setTxt('tl-step3', t.tl3); setTxt('tl-step4', t.tl4);
  setTxt('win-step1', t.win1); setTxt('win-step2', t.win2);
  setTxt('win-step3', t.win3); setTxt('win-step4', t.win4); setTxt('win-step5', t.win5);
  setTxt('mac-step1', t.mac1); setTxt('mac-step2', t.mac2);
  setTxt('mac-step3', t.mac3); setTxt('mac-step4', t.mac4); setTxt('mac-step5', t.mac5);

  // Settings
  setTxt('settings-title', t.settingsTitle); setTxt('settings-sub', t.settingsSub);
  setTxt('set-lang-title', t.setLangTitle); setTxt('set-lang-label', t.setLangLabel);
  setTxt('set-theme-title', t.setThemeTitle); setTxt('set-theme-label', t.setThemeLabel);
  setTxt('set-anim-title', t.setAnimTitle); setTxt('set-anim-label', t.setAnimLabel);
  setTxt('set-glow-label', t.setGlowLabel);
  setTxt('set-about-title', t.setAboutTitle); setTxt('set-ver-label', t.setVerLabel);
  setTxt('set-pp-label', t.setPPLabel);
const ls = document.getElementById('lang-select'); if (ls) ls.value = lang;

  // FAQ
  setTxt('faq-sub', t.faqSub);
  buildFAQ(t.faqItems);

  // Footer
  setTxt('footer-desc', t.footerDesc);
  setTxt('footer-contacts-title', t.footerContactsTitle);
  setTxt('footer-nav-title', t.footerNavTitle);
  setTxt('footer-dev-note', t.footerDevNote);
  setTxt('footer-copy', t.footerCopy);
  setTxt('footer-wwf-text', t.footerWWF);
  setTxt('footer-donate-text', t.footerDonate);
  setTxt('fnav-home', t.navHome); setTxt('fnav-maps', t.navMaps);
  setTxt('fnav-install', t.navInstall); setTxt('fnav-faq', t.navFaq);
}

// ===== LANGUAGE SETTERS =====
function setLang(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  applyLang(lang);
  localStorage.setItem('brz_lang', lang);
}
function setLangFromSelect(val) {
  applyLang(val);
  localStorage.setItem('brz_lang', val);
}

// ===== FAQ =====
function buildFAQ(items) {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = items.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <div class="faq-icon"><i class="fa-solid fa-plus"></i></div>
      </button>
      <div class="faq-answer" id="faq-ans-${i}">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');
}
function toggleFAQ(i) {
  const item = document.getElementById(`faq-item-${i}`);
  const ans = document.getElementById(`faq-ans-${i}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

// ===== NAVIGATION =====
function navTo(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link, .nav-faq').forEach(a => a.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('open');

  // Move footer into current section
  const footer = document.getElementById('site-footer');
  if (target && footer) target.appendChild(footer);
}

// ===== MAPS TABS =====
function switchMapsTab(id, btn) {
  document.querySelectorAll('.maps-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.maps-panel').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('maps-' + id).classList.add('active');
}
function switchInnerTab(prefix, id, btn) {
  const card = btn.closest('.map-body');
  card.querySelectorAll('.map-inner-tab').forEach(t => t.classList.remove('active'));
  card.querySelectorAll('.map-inner-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(prefix + '-' + id).classList.add('active');
}

// ===== INSTALL TABS =====
function switchInstall(id, btn) {
  document.querySelectorAll('.install-os-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.install-panel').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('install-' + id).classList.add('active');
}

// ===== COOKIE =====
function closeCookie() {
  document.getElementById('cookie-overlay').classList.add('hidden');
  localStorage.setItem('brz_cookie', '1');
}

// ===== SHARE =====
function shareMap(slug) {
  const url = location.origin + location.pathname + '#map-' + slug;
  navigator.clipboard.writeText(url).catch(() => {});
  showToast(T[currentLang].shareToast);
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

// ===== LIGHTBOX =====
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== THEMES =====
const themes = {
  teal:   { main: '#00c8aa', dim: '#00a08a', glow: 'rgba(0,200,170,0.18)',   glow2: 'rgba(0,200,170,0.07)',   border: 'rgba(0,200,170,0.22)' },
  purple: { main: '#7b61ff', dim: '#5f48d9', glow: 'rgba(123,97,255,0.18)',  glow2: 'rgba(123,97,255,0.07)',  border: 'rgba(123,97,255,0.22)' },
  red:    { main: '#ff6b6b', dim: '#d94f4f', glow: 'rgba(255,107,107,0.18)', glow2: 'rgba(255,107,107,0.07)', border: 'rgba(255,107,107,0.22)' },
  gold:   { main: '#f0a500', dim: '#c48500', glow: 'rgba(240,165,0,0.18)',   glow2: 'rgba(240,165,0,0.07)',   border: 'rgba(240,165,0,0.22)' }
};
function setTheme(name, el) {
  const th = themes[name]; if (!th) return;
  const r = document.documentElement.style;
  r.setProperty('--teal', th.main);
  r.setProperty('--teal-dim', th.dim);
  r.setProperty('--teal-glow', th.glow);
  r.setProperty('--teal-glow2', th.glow2);
  r.setProperty('--glass-border-teal', th.border);
  document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
  if (el) el.classList.add('active');
  localStorage.setItem('brz_theme', name);
}
function toggleAnimations(on) {
  document.documentElement.style.setProperty('--transition', on ? '0.3s cubic-bezier(.4,0,.2,1)' : '0s');
  localStorage.setItem('brz_anim', on ? '1' : '0');
}
function toggleGlow(on) {
  localStorage.setItem('brz_glow', on ? '1' : '0');
}

// ===== HAMBURGER =====
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  const savedLang  = localStorage.getItem('brz_lang')  || 'ru';
  const savedTheme = localStorage.getItem('brz_theme') || 'teal';
  const savedAnim  = localStorage.getItem('brz_anim');
  const savedGlow  = localStorage.getItem('brz_glow');
  const cookieSet  = localStorage.getItem('brz_cookie');

  // Hide cookie if already accepted
  if (cookieSet) document.getElementById('cookie-overlay').classList.add('hidden');

  // Language
  applyLang(savedLang);
  // Sync cookie lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${savedLang}'`));
  });

  // Theme
  if (savedTheme !== 'teal') {
    const sw = document.querySelector(`.theme-swatch[onclick*="${savedTheme}"]`);
    setTheme(savedTheme, sw);
  }

  // Animations / glow
  if (savedAnim === '0') {
    const el = document.getElementById('toggle-anim');
    if (el) { el.checked = false; toggleAnimations(false); }
  }
  if (savedGlow === '0') {
    const el = document.getElementById('toggle-glow');
    if (el) { el.checked = false; toggleGlow(false); }
  }

  // Move footer into home on first load
  const footer = document.getElementById('site-footer');
  const homePage = document.getElementById('page-home');
  if (homePage && footer) homePage.appendChild(footer);

  // Keyboard: Esc closes lightbox
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
