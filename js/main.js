/* Рантатуй — основной скрипт: языки, липкая панель, форма брони */
(function () {
  'use strict';

  var I18N = {
    ru: {
      'meta.title': 'Рантатуй — ресторан на Уралмаше, Екатеринбург',
      'meta.desc': 'Ресторан «Рантатуй» на Уралмаше: домашняя кухня, тёплый зал, семейные праздники и ужины после работы. Открыты с 9:00 до 00:00. Бронь и доставка.',
      'skip': 'Перейти к содержимому',
      'nav.about': 'О заведении', 'nav.menu': 'Меню', 'nav.promos': 'Акции', 'nav.contacts': 'Контакты',
      'cta.book': 'Забронировать',
      'hero.overline': 'Ресторан · Уралмаш · Екатеринбург',
      'hero.title': 'Ужинайте', 'hero.title2': 'по-домашнему',
      'hero.lead': 'Ресторан «Рантатуй» на Уралмаше — тёплый зал для семейных праздников и тихих вечеров после работы. Открыты с 9:00 до 00:00.',
      'hero.cta_book': 'Забронировать стол', 'hero.cta_menu': 'Смотреть меню',
      'hero.micro': 'или позвоните:',
      'hero.chip_hours': '9:00–00:00',
      'hero.chip_addr': 'Уралмаш, вход со стороны завода',
      'hero.caption': 'Временное фото — заменим на съёмку зала',
      'hero.alt': 'В ресторане «Рантатуй» столы накрыты к ужину',
      'about.overline': 'О заведении',
      'about.title': 'Тепло, уютно, по-домашнему',
      'about.p1': '«Рантатуй» — ресторан на Уралмаше, рядом с заводом. Мы ждём целыми семьями, компаниями друзей и тех, кто хочет спокойно поужинать после работы.',
      'about.need': '[НУЖНО: 2–3 предложения о кухне, шефе и продуктах — из брифа]',
      'about.caption': 'Временное фото — подача блюд',
      'about.alt': 'Блюдо домашней кухни крупным планом',
      'about.fact1': '9:00–00:00', 'about.fact2': 'ул. Уралмашовских, 34', 'about.fact3': 'вход со стороны завода',
      'menu.overline': 'Меню',
      'menu.title': 'Меню — в зале и в соцсетях',
      'menu.p': 'Полную версию меню смотрите в зале или спрашивайте у нас в соцсетях — приносим его к столу и публикуем вместе с сезонными обновлениями.',
      'menu.need': '[НУЖНО: 3–6 фирменных позиций с ценами — из брифа]',
      'menu.cta_tg': 'Запросить меню в Telegram', 'menu.cta_delivery': 'Заказать доставку',
      'menu.board_title': 'Сегодня в меню',
      'menu.row1c': 'Завтраки', 'menu.row1t': '9:00–12:00', 'menu.row1n': '[НУЖНО: позиции и цены]',
      'menu.row2c': 'Обеды и ужины', 'menu.row2t': '12:00–00:00', 'menu.row2n': '[НУЖНО: позиции и цены]',
      'menu.row3c': 'Десерты и напитки', 'menu.row3n': '[НУЖНО: позиции и цены]',
      'scen.overline': 'Как к нам приходят',
      'scen.title': 'У нас бывает по-разному',
      'scen.i1t': 'Семейный праздник', 'scen.i1d': 'Дни рождения и семейные даты — стол на всю компанию.',
      'scen.i2t': 'Ужин после работы', 'scen.i2d': 'Приходите один или вдвоём — тихий зал и горячий ужин.',
      'scen.i3t': 'Встреча с друзьями', 'scen.i3d': 'Большой стол и неспешный вечер в своей компании.',
      'scen.alt': 'Накрытый стол с блюдами в ресторане',
      'scen.caption': 'Временное фото',
      'atm.overline': 'Атмосфера',
      'atm.title': 'Зал, в который хочется вернуться',
      'atm.p': 'Нам важны тёплый свет, удобные столы и спокойная обстановка — чтобы и детям, и бабушкам было хорошо.',
      'atm.need': '[НУЖНО: пара предложений о зале от владельца — свет, мебель, вид из окна]',
      'atm.alt': 'Вечерняя сервировка стола в тёплом свете',
      'atm.caption': 'Временное фото интерьера',
      'promos.overline': 'Акции и мероприятия',
      'promos.title': 'Причины вернуться',
      'promos.i1t': 'День рождения', 'promos.i1d': 'Отметьте день рождения у нас — подарим десерт.',
      'promos.i2t': 'Будни с 9:00', 'promos.i2d': 'Приходите на завтрак в будни — кофе в подарок.',
      'promos.i3t': 'Рантатуй-суббота', 'promos.i3d': 'Раз в месяц собираем большой семейный ужин для своих.',
      'promos.note': 'Условия акций уточняйте по телефону или в Telegram.',
      'promos.alt1': 'Домашний десерт с ягодами',
      'del.overline': 'Доставка',
      'del.title': 'Доставка по Уралмашу',
      'del.p': 'Закажите любимые блюда с собой — работаем с 9:00 до 00:00. Точную зону и время уточняйте по телефону.',
      'del.need': '[НУЖНО: условия доставки — минимальный заказ, зона, время]',
      'del.cta_tg': 'Написать в Telegram', 'del.cta_call': 'Позвонить',
      'book.overline': 'Бронь',
      'book.title': 'Забронировать стол',
      'book.p': 'Оставьте заявку — перезвоним и подтвердим стол. Или напишите нам в Telegram.',
      'form.name': 'Имя', 'form.phone': 'Телефон', 'form.date': 'Дата', 'form.time': 'Время',
      'form.guests': 'Гости', 'form.g1': '1 гость', 'form.g2': '2 гостя', 'form.g3': '3–4 гостя', 'form.g4': '5 и больше',
      'form.comment': 'Комментарий', 'form.opt': 'необязательно', 'form.submit': 'Отправить заявку',
      'form.err_name': 'Подскажите, как вас зовут', 'form.err_phone': 'Оставьте телефон — перезвоним',
      'form.err_date': 'Выберите дату', 'form.err_time': 'Выберите время',
      'form.ok': 'Спасибо! Заявка готова — позвоните нам или напишите в Telegram, чтобы мы подтвердили стол.',
      'contacts.title': 'Контакты',
      'contacts.addr': 'Екатеринбург, ул. Уралмашовских, 34',
      'contacts.addr_note': 'вход со стороны завода',
      'contacts.hours': '9:00–00:00', 'contacts.hours_note': 'ежедневно',
      'contacts.tg': 'Telegram', 'contacts.vk': 'ВКонтакте',
      'contacts.map': 'Открыть в Яндекс Картах',
      'contacts.note': 'Не дозвонились — напишите в Telegram, отвечаем в рабочее время.',
      'footer.tagline': 'Ресторан домашней кухни на Уралмаше.',
      'footer.addr': 'Екатеринбург, ул. Уралмашовских, 34',
      'footer.hours': '9:00–00:00',
      'footer.need': '[НУЖНО: реквизиты компании]',
      'footer.policy': 'Политика конфиденциальности',
      'sticky.book': 'Забронировать', 'sticky.call': 'Позвонить'
    },
    en: {
      'meta.title': 'Ratatuy — restaurant on Uralmash, Yekaterinburg',
      'meta.desc': 'Ratatuy restaurant on Uralmash: home-style cooking, a warm dining room, family celebrations and quiet dinners after work. Open 9:00–00:00. Booking and delivery.',
      'skip': 'Skip to content',
      'nav.about': 'About', 'nav.menu': 'Menu', 'nav.promos': 'Offers', 'nav.contacts': 'Contacts',
      'cta.book': 'Book',
      'hero.overline': 'Restaurant · Uralmash · Yekaterinburg',
      'hero.title': 'Dinner,', 'hero.title2': 'just like home',
      'hero.lead': 'Ratatuy restaurant on Uralmash — a warm dining room for family celebrations and quiet evenings after work. Open 9:00–00:00.',
      'hero.cta_book': 'Book a table', 'hero.cta_menu': 'See the menu',
      'hero.micro': 'or call',
      'hero.chip_hours': '9:00–00:00',
      'hero.chip_addr': 'Uralmash, entrance from the plant side',
      'hero.caption': 'Temporary photo — to be replaced with a hall shoot',
      'hero.alt': 'Tables set for dinner at the Ratatuy restaurant',
      'about.overline': 'About',
      'about.title': 'Warm, cosy, homemade',
      'about.p1': 'Ratatuy is a restaurant on Uralmash, next to the plant. We welcome whole families, groups of friends and anyone who wants a quiet dinner after work.',
      'about.need': '[NEEDED: 2–3 sentences about the cuisine, chef and produce — from the brief]',
      'about.caption': 'Temporary photo — dish presentation',
      'about.alt': 'A home-style dish in close-up',
      'about.fact1': '9:00–00:00', 'about.fact2': '34 Uralmashovskikh St.', 'about.fact3': 'entrance from the plant side',
      'menu.overline': 'Menu',
      'menu.title': 'Menu — in the hall and on our socials',
      'menu.p': 'See the full menu in the hall or ask us on social media — we bring it to your table and publish it with seasonal updates.',
      'menu.need': '[NEEDED: 3–6 signature dishes with prices — from the brief]',
      'menu.cta_tg': 'Ask for the menu on Telegram', 'menu.cta_delivery': 'Order delivery',
      'menu.board_title': 'Today’s menu',
      'menu.row1c': 'Breakfasts', 'menu.row1t': '9:00–12:00', 'menu.row1n': '[NEEDED: dishes and prices]',
      'menu.row2c': 'Lunches and dinners', 'menu.row2t': '12:00–00:00', 'menu.row2n': '[NEEDED: dishes and prices]',
      'menu.row3c': 'Desserts and drinks', 'menu.row3n': '[NEEDED: dishes and prices]',
      'scen.overline': 'Why people come',
      'scen.title': 'Every visit is different',
      'scen.i1t': 'Family celebration', 'scen.i1d': 'Birthdays and family dates — a table for the whole company.',
      'scen.i2t': 'Dinner after work', 'scen.i2d': 'Come alone or as a pair — a quiet hall and a hot dinner.',
      'scen.i3t': 'Meeting friends', 'scen.i3d': 'A big table and an unhurried evening with your people.',
      'scen.alt': 'A set table with dishes in the restaurant',
      'scen.caption': 'Temporary photo',
      'atm.overline': 'Atmosphere',
      'atm.title': 'A hall you want to come back to',
      'atm.p': 'Warm light, comfortable tables and a calm atmosphere matter to us — so children and grandparents alike feel good here.',
      'atm.need': '[NEEDED: a couple of sentences about the hall from the owner — light, furniture, window view]',
      'atm.alt': 'An evening table setting in warm light',
      'atm.caption': 'Temporary interior photo',
      'promos.overline': 'Offers and events',
      'promos.title': 'Reasons to come back',
      'promos.i1t': 'Birthday', 'promos.i1d': 'Celebrate your birthday with us — the dessert is on us.',
      'promos.i2t': 'Weekdays from 9:00', 'promos.i2d': 'Join us for breakfast on weekdays — coffee is on us.',
      'promos.i3t': 'Ratatuy Saturday', 'promos.i3d': 'Once a month we host a big family dinner for our regulars.',
      'promos.note': 'Ask about offer terms by phone or on Telegram.',
      'promos.alt1': 'A homemade berry dessert',
      'del.overline': 'Delivery',
      'del.title': 'Delivery across Uralmash',
      'del.p': 'Order your favourite dishes to go — we are open 9:00–00:00. Confirm the exact zone and time by phone.',
      'del.need': '[NEEDED: delivery terms — minimum order, zone, hours]',
      'del.cta_tg': 'Message us on Telegram', 'del.cta_call': 'Call',
      'book.overline': 'Booking',
      'book.title': 'Book a table',
      'book.p': 'Leave a request — we will call back and confirm your table. Or message us on Telegram.',
      'form.name': 'Name', 'form.phone': 'Phone', 'form.date': 'Date', 'form.time': 'Time',
      'form.guests': 'Guests', 'form.g1': '1 guest', 'form.g2': '2 guests', 'form.g3': '3–4 guests', 'form.g4': '5 and more',
      'form.comment': 'Comment', 'form.opt': 'optional', 'form.submit': 'Send request',
      'form.err_name': 'Please tell us your name', 'form.err_phone': 'Leave a phone number so we can call back',
      'form.err_date': 'Choose a date', 'form.err_time': 'Choose a time',
      'form.ok': 'Thank you! Your request is ready — call us or message us on Telegram so we can confirm the table.',
      'contacts.title': 'Contacts',
      'contacts.addr': '34 Uralmashovskikh St., Yekaterinburg',
      'contacts.addr_note': 'entrance from the plant side',
      'contacts.hours': '9:00–00:00', 'contacts.hours_note': 'daily',
      'contacts.tg': 'Telegram', 'contacts.vk': 'VK',
      'contacts.map': 'Open in Yandex Maps',
      'contacts.note': 'Can’t get through — message us on Telegram, we reply during opening hours.',
      'footer.tagline': 'A home-style restaurant on Uralmash.',
      'footer.addr': '34 Uralmashovskikh St., Yekaterinburg',
      'footer.hours': '9:00–00:00',
      'footer.need': '[NEEDED: company details]',
      'footer.policy': 'Privacy policy',
      'sticky.book': 'Book', 'sticky.call': 'Call'
    }
  };

  var LANG_KEY = 'rantatuy-lang';

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.ru;
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', dict['meta.desc']);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }
    var alts = document.querySelectorAll('[data-i18n-alt]');
    for (var j = 0; j < alts.length; j++) {
      var akey = alts[j].getAttribute('data-i18n-alt');
      if (dict[akey] != null) alts[j].setAttribute('alt', dict[akey]);
    }
    var btns = document.querySelectorAll('.lang__btn');
    for (var k = 0; k < btns.length; k++) {
      btns[k].classList.toggle('is-active', btns[k].getAttribute('data-lang') === lang);
      btns[k].setAttribute('aria-pressed', btns[k].getAttribute('data-lang') === lang ? 'true' : 'false');
    }
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = 'ru';
    try { saved = localStorage.getItem(LANG_KEY) || 'ru'; } catch (e) {}
    if (saved !== 'ru' && saved !== 'en') saved = 'ru';
    applyLang(saved);
    var btns = document.querySelectorAll('.lang__btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    }
  }

  /* ---- Липкая мобильная панель ---- */
  function initSticky() {
    var bar = document.getElementById('stickybar');
    if (!bar) return;
    var closed = false;
    try { closed = sessionStorage.getItem('rantatuy-sticky-closed') === '1'; } catch (e) {}
    if (closed) return;

    var ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      var nearBottom = false;
      var foot = document.querySelector('.footer');
      if (foot) {
        var r = foot.getBoundingClientRect();
        nearBottom = r.top < window.innerHeight * 1.2;
      }
      var show = y > 640 && !nearBottom;
      bar.hidden = !show;
      document.body.classList.toggle('has-sticky', show && window.matchMedia('(max-width: 1023.98px)').matches);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    var closeBtn = document.getElementById('stickyclose');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        bar.hidden = true;
        document.body.classList.remove('has-sticky');
        try { sessionStorage.setItem('rantatuy-sticky-closed', '1'); } catch (e) {}
      });
    }
  }

  /* ---- Форма брони ---- */
  function initForm() {
    var form = document.getElementById('bookform');
    if (!form) return;
    var ok = document.getElementById('formok');
    var dateInput = document.getElementById('f-date');
    if (dateInput) {
      var t = new Date();
      var iso = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
      dateInput.min = iso;
    }
    var dict = function (key) {
      var lang = document.documentElement.lang || 'ru';
      return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || '';
    };
    function setErr(input, errId, msg) {
      var el = document.getElementById(errId);
      if (msg) {
        el.textContent = msg;
        input.setAttribute('aria-invalid', 'true');
      } else {
        el.textContent = '';
        input.removeAttribute('aria-invalid');
      }
    }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = document.getElementById('f-name');
      var phone = document.getElementById('f-phone');
      var time = document.getElementById('f-time');
      var valid = true;

      if (name.value.trim().length < 2) { setErr(name, 'err-name', dict('form.err_name')); valid = false; }
      else setErr(name, 'err-name', '');
      var digits = phone.value.replace(/\D/g, '');
      if (digits.length < 10) { setErr(phone, 'err-phone', dict('form.err_phone')); valid = false; }
      else setErr(phone, 'err-phone', '');
      if (!dateInput.value) { setErr(dateInput, 'err-date', dict('form.err_date')); valid = false; }
      else setErr(dateInput, 'err-date', '');
      if (!time.value) { setErr(time, 'err-time', dict('form.err_time')); valid = false; }
      else setErr(time, 'err-time', '');

      if (!valid) {
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }
      ok.textContent = dict('form.ok');
      ok.hidden = false;
      ok.setAttribute('tabindex', '-1');
      ok.focus();
      form.reset();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initLang(); initSticky(); initForm(); });
  } else {
    initLang(); initSticky(); initForm();
  }
})();
