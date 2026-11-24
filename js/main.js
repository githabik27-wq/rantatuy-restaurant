/* Рантатуй — основной скрипт: RU/EN, липкая панель, форма брони */
(function () {
  'use strict';

  var I18N = {
    ru: {
      'g.skip': 'Перейти к содержимому',
      'g.nav.home': 'Главная', 'g.nav.about': 'О ресторане', 'g.nav.menu': 'Меню', 'g.nav.promos': 'Акции', 'g.nav.contacts': 'Контакты',
      'g.cta.book': 'Забронировать',
      'g.footer_tagline': 'Ресторан домашней кухни на Уралмаше.',
      'g.footer_addr': 'Екатеринбург, ул. Уралмашовских, 34',
      'g.footer_hours': '9:00–00:00',
      'g.footer_policy': 'Политика конфиденциальности',
      'g.tg': 'Telegram', 'g.vk': 'ВКонтакте',
      'g.sticky_book': 'Забронировать', 'g.sticky_call': 'Позвонить',

      'home.meta_title': 'Рантатуй — ресторан на Уралмаше, Екатеринбург',
      'home.meta_desc': 'Ресторан «Рантатуй» на Уралмаше: домашняя кухня, тёплый зал, семейные праздники и ужины после работы. Открыты с 9:00 до 00:00. Бронь и доставка.',
      'home.overline': 'Ресторан · Уралмаш · Екатеринбург',
      'home.title1': 'Ужинайте', 'home.title2': 'по-домашнему',
      'home.lead': 'Ресторан «Рантатуй» на Уралмаше — тёплый зал для семейных праздников и тихих вечеров после работы. Открыты с 9:00 до 00:00.',
      'home.cta_book': 'Забронировать стол', 'home.cta_menu': 'Смотреть меню',
      'home.micro': 'или позвоните:',
      'home.chip_hours': '9:00–00:00',
      'home.chip_addr': 'Уралмаш, вход со стороны завода',
      'home.alt_hero': 'В ресторане «Рантатуй» столы накрыты к ужину',
      'home.about_over': 'Рантатуй',
      'home.about_title': 'Тёплый зал рядом с заводом',
      'home.about_p1': 'Мы готовим домашнюю кухню из проверенных продуктов и ждём всех: семьи с детьми, компании друзей и тех, кто хочет спокойно поужинать после работы.',
      'home.about_p2': 'В меню — сезонные блюда, завтраки с утра и десерты, которые гости просят добавки.',
      'home.about_more': 'Больше о ресторане →',
      'home.alt_about': 'Блюдо домашней кухни крупным планом',
      'home.fact1': '9:00–00:00', 'home.fact2': 'ул. Уралмашовских, 34', 'home.fact3': 'вход со стороны завода',
      'home.menu_over': 'Что готовим',
      'home.menu_title': 'Из меню',
      'home.menu_all': 'Всё меню →',
      'home.alt_d1': 'Овощное рагу с зеленью', 'home.d1n': 'Рататуй овощной', 'home.d1d': 'фирменное, с зеленью и хлебом из печи',
      'home.alt_d2': 'Мясное блюдо с розмарином', 'home.d2n': 'Птица с картофелем', 'home.d2d': 'запечённая, с травами',
      'home.alt_d3': 'Домашний суп в миске', 'home.d3n': 'Борщ с пампушкой', 'home.d3d': 'со сметаной, как у бабушки',
      'home.alt_d4': 'Рыба с овощами', 'home.d4n': 'Рыба с овощами', 'home.d4d': 'запечённая, с зеленью',
      'home.scen_over': 'Как к нам приходят',
      'home.scen_title': 'У нас бывает по-разному',
      'home.i1t': 'Семейный праздник', 'home.i1d': 'Дни рождения и семейные даты — стол на всю компанию.',
      'home.i2t': 'Ужин после работы', 'home.i2d': 'Приходите один или вдвоём — тихий зал и горячий ужин.',
      'home.i3t': 'Встреча с друзьями', 'home.i3d': 'Большой стол и неспешный вечер в своей компании.',
      'home.alt_scen': 'Накрытый стол с блюдами в ресторане',
      'home.promos_over': 'Акции и мероприятия',
      'home.promos_title': 'Причины вернуться',
      'home.promos_all': 'Все акции →',
      'home.p1t': 'День рождения', 'home.p1d': 'Отметьте день рождения у нас — подарим десерт.',
      'home.p2t': 'Будни с 9:00', 'home.p2d': 'Приходите на завтрак в будни — кофе в подарок.',
      'home.p3t': 'Рантатуй-суббота', 'home.p3d': 'Раз в месяц собираем большой семейный ужин для своих.',
      'home.alt_p1': 'Домашний десерт с ягодами',
      'home.alt_p2': 'Чашка кофе и французский пресс',
      'home.alt_p3': 'Большой стол с блюдами, вид сверху',
      'home.band_over': 'Бронь',
      'home.band_title': 'Стол уже ждёт',
      'home.band_p': 'Оставьте заявку — перезвоним и подтвердим. Или напишите нам в Telegram.',
      'home.band_cta': 'Забронировать стол', 'home.band_call': 'Позвонить',

      'menu.meta_title': 'Меню — Рантатуй, ресторан на Уралмаше',
      'menu.meta_desc': 'Меню ресторана «Рантатуй»: завтраки с 9:00, домашние супы, горячее, десерты и напитки. Екатеринбург, Уралмаш.',
      'menu.title': 'Меню',
      'menu.lead': 'Готовим из сезонных продуктов и семейных рецептов. Завтраки — с 9:00, основное меню — до полуночи.',
      'menu.alt_plated': 'Блюдо домашней кухни на подаче',
      'menu.b_head': 'Завтраки', 'menu.b_time': '9:00–12:00',
      'menu.b1n': 'Сырники со сметаной', 'menu.b1d': 'ягодный соус',
      'menu.b2n': 'Блины с творогом', 'menu.b2d': 'изюм, сметана',
      'menu.b3n': 'Омлет с зеленью', 'menu.b3d': 'хлеб из печи',
      'menu.b4n': 'Каша тыквенная', 'menu.b4d': 'на молоке',
      'menu.alt_breakfast': 'Французский тост с ягодами на завтрак',
      'menu.s_head': 'Супы',
      'menu.s1n': 'Рататуй овощной', 'menu.s1d': 'фирменный, с зеленью',
      'menu.s2n': 'Борщ с пампушкой', 'menu.s2d': 'со сметаной',
      'menu.s3n': 'Куриный суп с лапшой', 'menu.s3d': 'домашняя лапша',
      'menu.m_head': 'Горячее', 'menu.m_time': '12:00–00:00',
      'menu.m1n': 'Котлета домашняя', 'menu.m1d': 'картофельное пюре, лук',
      'menu.m2n': 'Птица с картофелем', 'menu.m2d': 'запечённая, с травами',
      'menu.m3n': 'Рыба с овощами', 'menu.m3d': 'запечённая, с зеленью',
      'menu.m4n': 'Гречка с грибами', 'menu.m4d': 'лук, зелень',
      'menu.d_head': 'Десерты',
      'menu.d1n': 'Медовик', 'menu.d1d': 'по домашнему рецепту',
      'menu.d2n': 'Пирог ягодный', 'menu.d2d': 'сезонные ягоды',
      'menu.d3n': 'Десерт дня', 'menu.d3d': 'спросите у официанта',
      'menu.alt_pancakes': 'Блины с ягодами и сиропом',
      'menu.dr_head': 'Напитки',
      'menu.dr1n': 'Кофе', 'menu.dr1d': 'эспрессо, капучино, латте',
      'menu.dr2n': 'Чай травяной', 'menu.dr2d': 'сбор уральских трав',
      'menu.dr3n': 'Морс клюквенный', 'menu.dr3d': 'домашний',
      'menu.dr4n': 'Компот ягодный', 'menu.dr4d': 'сезонные ягоды',
      'menu.note': 'Меню печатаем на сезон — приносим к столу. Если что-то нельзя или вы хотите своё — скажите официанту, постараемся помочь.',
      'menu.band_over': 'Бронь',
      'menu.band_title': 'Приходите попробовать',
      'menu.band_p': 'Оставьте заявку — перезвоним и подтвердим стол. Завтраки подаём с 9:00.',
      'menu.band_cta': 'Забронировать стол',

      'about.meta_title': 'О ресторане — Рантатуй, Уралмаш',
      'about.meta_desc': 'О ресторане «Рантатуй» на Уралмаше: тёплый зал, домашняя кухня, семейные праздники. Вход со стороны завода.',
      'about.title': 'Тёплый зал рядом с заводом',
      'about.lead': '«Рантатуй» — семейный ресторан на Уралмаше. Мы готовим домашнюю кухню и ждём всех: семьи с детьми, компании друзей и тех, кто хочет спокойно поужинать после работы.',
      'about.how_over': 'Как мы готовим',
      'about.how_title': 'Просто и честно',
      'about.h1t': 'Сезонные продукты', 'about.h1d': 'Меню меняется по сезону — готовим из того, что сейчас в меру свежим и вкусным.',
      'about.h2t': 'Семейные рецепты', 'about.h2d': 'Многие блюда — из семейных рецептов, проверенных временем и гостями.',
      'about.h3t': 'Одним столом', 'about.h3d': 'Любим большие компании: для праздников собираем столы на всю семью.',
      'about.gal_over': 'Зал',
      'about.gal_title': 'Свет, дерево, места для своих',
      'about.alt_g1': 'Основной зал ресторана с деревянными столами',
      'about.alt_g2': 'Уголок зала с мягким светом',
      'about.alt_g3': 'Вечерняя сервировка стола',
      'about.alt_g4': 'Столики у окна в зале ресторана',
      'about.find_over': 'Как нас найти',
      'about.find_title': 'Мы рядом с заводом',
      'about.find_p': 'Екатеринбург, Уралмаш, ул. Уралмашовских, 34. Вход — со стороны завода. Работаем с 9:00 до 00:00, ежедневно.',
      'about.map': 'Открыть в Яндекс Картах →',
      'about.c_title': 'Коротко',
      'about.c_hours': '9:00–00:00', 'about.c_hours_n': 'ежедневно',
      'about.c_addr': 'ул. Уралмашовских, 34', 'about.c_addr_n': 'вход со стороны завода',

      'promos.meta_title': 'Акции и мероприятия — Рантатуй',
      'promos.meta_desc': 'Акции ресторана «Рантатуй»: десерт в подарок на день рождения, кофе к завтраку в будни, семейный ужин «Рантатуй-суббота».',
      'pr.title': 'Причины вернуться',
      'pr.lead': 'Три повода заглянуть в «Рантатуй» — помимо того, что здесь просто вкусно кормят.',
      'pr.p1_over': 'Акция', 'pr.p1t': 'День рождения',
      'pr.p1d': 'Отметьте день рождения у нас — подарим десерт. Стол для семьи и друзей, тёплые слова от команды и фотографии на память.',
      'pr.p1m': 'В день праздника · нужна предварительная бронь',
      'pr.p1cta': 'Забронировать праздник',
      'pr.p2_over': 'Акция', 'pr.p2t': 'Будни с 9:00',
      'pr.p2d': 'Приходите на завтрак в будние дни — кофе подарим к любому завтраку. Начните день спокойно, не толкайтесь с кофейным автоматом.',
      'pr.p2m': 'Пн–Пт · 9:00–12:00',
      'pr.p2cta': 'Завтраки в меню',
      'pr.p3_over': 'Мероприятие', 'pr.p3t': 'Рантатуй-суббота',
      'pr.p3d': 'Раз в месяц, в последнюю субботу, собираем большой семейный ужин: общий стол, специальное меню от поваров и неспешный вечер для своих. Мест мало — бронируйте заранее.',
      'pr.p3m': 'Последняя суббота месяца · 17:00 · нужна бронь',
      'pr.alt1': 'Домашний десерт с ягодами',
      'pr.alt2': 'Чашка кофе на деревянном столе',
      'pr.alt3': 'Общий стол с блюдами на семейный ужин',
      'pr.p3cta': 'Занять место',
      'pr.note': 'Условия акций уточняйте по телефону или в Telegram — если день особенный, подскажем, как лучше устроить.',
      'pr.band_over': 'Бронь',
      'pr.band_title': 'Расскажите о вашем дне',
      'pr.band_p': 'Оставьте заявку — подберём зал, время и меню под компанию.',
      'pr.band_cta': 'Забронировать стол',

      'booking.meta_title': 'Бронь и контакты — Рантатуй',
      'booking.meta_desc': 'Забронировать стол в ресторане «Рантатуй» на Уралмаше: заявка, телефон, Telegram. Екатеринбург, ул. Уралмашовских, 34.',
      'bk.title': 'Забронировать стол',
      'bk.lead': 'Оставьте заявку — перезвоним и подтвердим. Или напишите нам в Telegram, так быстрее.',
      'bk.band_over': 'Доставка',
      'bk.band_title': 'Привезём горячее домой',
      'bk.band_p': 'Закажите любимые блюда с собой — работаем с 9:00 до 00:00. Точную зону и время уточняйте по телефону.',
      'bk.band_tg': 'Написать в Telegram', 'bk.band_call': 'Позвонить',
      'ct.title': 'Контакты',
      'ct.addr': 'Екатеринбург, ул. Уралмашовских, 34',
      'ct.addr_n': 'вход со стороны завода',
      'ct.hours': '9:00–00:00', 'ct.hours_n': 'ежедневно',
      'ct.map': 'Открыть в Яндекс Картах',
      'ct.note': 'Не дозвонились — напишите в Telegram, отвечаем в рабочее время.',

      'form.name': 'Имя', 'form.phone': 'Телефон', 'form.date': 'Дата', 'form.time': 'Время',
      'form.guests': 'Гости', 'form.g1': '1 гость', 'form.g2': '2 гостя', 'form.g3': '3–4 гостя', 'form.g4': '5 и больше',
      'form.comment': 'Комментарий', 'form.opt': 'необязательно', 'form.submit': 'Отправить заявку',
      'form.err_name': 'Подскажите, как вас зовут', 'form.err_phone': 'Оставьте телефон — перезвоним',
      'form.err_date': 'Выберите дату', 'form.err_time': 'Выберите время',
      'form.ok': 'Спасибо! Заявка готова — позвоните нам или напишите в Telegram, чтобы мы подтвердили стол.'
    },
    en: {
      'g.skip': 'Skip to content',
      'g.nav.home': 'Home', 'g.nav.about': 'About', 'g.nav.menu': 'Menu', 'g.nav.promos': 'Offers', 'g.nav.contacts': 'Contacts',
      'g.cta.book': 'Book',
      'g.footer_tagline': 'A home-style restaurant on Uralmash.',
      'g.footer_addr': '34 Uralmashovskikh St., Yekaterinburg',
      'g.footer_hours': '9:00–00:00',
      'g.footer_policy': 'Privacy policy',
      'g.tg': 'Telegram', 'g.vk': 'VK',
      'g.sticky_book': 'Book', 'g.sticky_call': 'Call',

      'home.meta_title': 'Ratatuy — restaurant on Uralmash, Yekaterinburg',
      'home.meta_desc': 'Ratatuy restaurant on Uralmash: home-style cooking, a warm dining room, family celebrations and quiet dinners after work. Open 9:00–00:00. Booking and delivery.',
      'home.overline': 'Restaurant · Uralmash · Yekaterinburg',
      'home.title1': 'Dinner,', 'home.title2': 'just like home',
      'home.lead': 'Ratatuy restaurant on Uralmash — a warm dining room for family celebrations and quiet evenings after work. Open 9:00–00:00.',
      'home.cta_book': 'Book a table', 'home.cta_menu': 'See the menu',
      'home.micro': 'or call',
      'home.chip_hours': '9:00–00:00',
      'home.chip_addr': 'Uralmash, entrance from the plant side',
      'home.alt_hero': 'Tables set for dinner at the Ratatuy restaurant',
      'home.about_over': 'Ratatuy',
      'home.about_title': 'A warm hall next to the plant',
      'home.about_p1': 'We cook home-style food from trusted produce and welcome everyone: families with children, groups of friends and anyone who wants a quiet dinner after work.',
      'home.about_p2': 'The menu features seasonal dishes, breakfasts from morning and desserts guests ask for more of.',
      'home.about_more': 'More about the restaurant →',
      'home.alt_about': 'A home-style dish in close-up',
      'home.fact1': '9:00–00:00', 'home.fact2': '34 Uralmashovskikh St.', 'home.fact3': 'entrance from the plant side',
      'home.menu_over': 'What we cook',
      'home.menu_title': 'From the menu',
      'home.menu_all': 'Full menu →',
      'home.alt_d1': 'Vegetable stew with herbs', 'home.d1n': 'Vegetable ratatouille', 'home.d1d': 'signature, with herbs and oven bread',
      'home.alt_d2': 'Meat dish with rosemary', 'home.d2n': 'Bird with potatoes', 'home.d2d': 'roasted, with herbs',
      'home.alt_d3': 'Homemade soup in a bowl', 'home.d3n': 'Borscht with pampushka', 'home.d3d': 'with sour cream, like grandma’s',
      'home.alt_d4': 'Fish with vegetables', 'home.d4n': 'Fish with vegetables', 'home.d4d': 'baked, with herbs',
      'home.scen_over': 'Why people come',
      'home.scen_title': 'Every visit is different',
      'home.i1t': 'Family celebration', 'home.i1d': 'Birthdays and family dates — a table for the whole company.',
      'home.i2t': 'Dinner after work', 'home.i2d': 'Come alone or as a pair — a quiet hall and a hot dinner.',
      'home.i3t': 'Meeting friends', 'home.i3d': 'A big table and an unhurried evening with your people.',
      'home.alt_scen': 'A set table with dishes in the restaurant',
      'home.promos_over': 'Offers and events',
      'home.promos_title': 'Reasons to come back',
      'home.promos_all': 'All offers →',
      'home.p1t': 'Birthday', 'home.p1d': 'Celebrate your birthday with us — the dessert is on us.',
      'home.p2t': 'Weekdays from 9:00', 'home.p2d': 'Join us for breakfast on weekdays — coffee is on us.',
      'home.p3t': 'Ratatuy Saturday', 'home.p3d': 'Once a month we host a big family dinner for our regulars.',
      'home.alt_p1': 'A homemade berry dessert',
      'home.alt_p2': 'A cup of coffee and a French press',
      'home.alt_p3': 'A large table with dishes, top view',
      'home.band_over': 'Booking',
      'home.band_title': 'Your table is waiting',
      'home.band_p': 'Leave a request — we will call back and confirm. Or message us on Telegram.',
      'home.band_cta': 'Book a table', 'home.band_call': 'Call',

      'menu.meta_title': 'Menu — Ratatuy restaurant on Uralmash',
      'menu.meta_desc': 'Menu of the Ratatuy restaurant: breakfasts from 9:00, homemade soups, mains, desserts and drinks. Yekaterinburg, Uralmash.',
      'menu.title': 'Menu',
      'menu.lead': 'We cook from seasonal produce and family recipes. Breakfasts from 9:00, the main menu until midnight.',
      'menu.alt_plated': 'A home-style dish presented',
      'menu.b_head': 'Breakfasts', 'menu.b_time': '9:00–12:00',
      'menu.b1n': 'Cheesecakes with sour cream', 'menu.b1d': 'berry sauce',
      'menu.b2n': 'Pancakes with cottage cheese', 'menu.b2d': 'raisins, sour cream',
      'menu.b3n': 'Omelette with herbs', 'menu.b3d': 'oven bread',
      'menu.b4n': 'Pumpkin porridge', 'menu.b4d': 'with milk',
      'menu.alt_breakfast': 'French toast with berries for breakfast',
      'menu.s_head': 'Soups',
      'menu.s1n': 'Vegetable ratatouille', 'menu.s1d': 'signature, with herbs',
      'menu.s2n': 'Borscht with pampushka', 'menu.s2d': 'with sour cream',
      'menu.s3n': 'Chicken noodle soup', 'menu.s3d': 'homemade noodles',
      'menu.m_head': 'Mains', 'menu.m_time': '12:00–00:00',
      'menu.m1n': 'Homemade cutlet', 'menu.m1d': 'mashed potatoes, onion',
      'menu.m2n': 'Bird with potatoes', 'menu.m2d': 'roasted, with herbs',
      'menu.m3n': 'Fish with vegetables', 'menu.m3d': 'baked, with herbs',
      'menu.m4n': 'Buckwheat with mushrooms', 'menu.m4d': 'onion, herbs',
      'menu.d_head': 'Desserts',
      'menu.d1n': 'Medovik honey cake', 'menu.d1d': 'family recipe',
      'menu.d2n': 'Berry pie', 'menu.d2d': 'seasonal berries',
      'menu.d3n': 'Dessert of the day', 'menu.d3d': 'ask your waiter',
      'menu.alt_pancakes': 'Pancakes with berries and syrup',
      'menu.dr_head': 'Drinks',
      'menu.dr1n': 'Coffee', 'menu.dr1d': 'espresso, cappuccino, latte',
      'menu.dr2n': 'Herbal tea', 'menu.dr2d': 'Ural herb blend',
      'menu.dr3n': 'Cranberry mors', 'menu.dr3d': 'homemade',
      'menu.dr4n': 'Berry compote', 'menu.dr4d': 'seasonal berries',
      'menu.note': 'We print the menu each season and bring it to your table. If something does not suit you — tell the waiter, we will do our best to help.',
      'menu.band_over': 'Booking',
      'menu.band_title': 'Come taste it',
      'menu.band_p': 'Leave a request — we will call back and confirm. Breakfasts are served from 9:00.',
      'menu.band_cta': 'Book a table',

      'about.meta_title': 'About — Ratatuy, Uralmash',
      'about.meta_desc': 'About the Ratatuy restaurant on Uralmash: a warm hall, home-style cooking, family celebrations. Entrance from the plant side.',
      'about.title': 'A warm hall next to the plant',
      'about.lead': 'Ratatuy is a family restaurant on Uralmash. We cook home-style food and welcome everyone: families with children, groups of friends and anyone who wants a quiet dinner after work.',
      'about.how_over': 'How we cook',
      'about.how_title': 'Simple and honest',
      'about.h1t': 'Seasonal produce', 'about.h1d': 'The menu changes with the seasons — we cook from what is fresh and tasty right now.',
      'about.h2t': 'Family recipes', 'about.h2d': 'Many dishes come from family recipes tested by time and our guests.',
      'about.h3t': 'One big table', 'about.h3d': 'We love large companies: for celebrations we set tables for the whole family.',
      'about.gal_over': 'The hall',
      'about.gal_title': 'Light, wood, room for your own',
      'about.alt_g1': 'The main hall of the restaurant with wooden tables',
      'about.alt_g2': 'A corner of the hall with soft light',
      'about.alt_g3': 'An evening table setting',
      'about.alt_g4': 'Tables by the window in the restaurant hall',
      'about.find_over': 'How to find us',
      'about.find_title': 'Right next to the plant',
      'about.find_p': '34 Uralmashovskikh St., Uralmash, Yekaterinburg. Entrance from the plant side. Open 9:00–00:00 daily.',
      'about.map': 'Open in Yandex Maps →',
      'about.c_title': 'In short',
      'about.c_hours': '9:00–00:00', 'about.c_hours_n': 'daily',
      'about.c_addr': '34 Uralmashovskikh St.', 'about.c_addr_n': 'entrance from the plant side',

      'promos.meta_title': 'Offers and events — Ratatuy',
      'promos.meta_desc': 'Ratatuy offers: a dessert on your birthday, coffee with weekday breakfasts, and the monthly Ratatuy Saturday family dinner.',
      'pr.title': 'Reasons to come back',
      'pr.lead': 'Three reasons to stop by Ratatuy — besides the fact that the food here is simply good.',
      'pr.p1_over': 'Offer', 'pr.p1t': 'Birthday',
      'pr.p1d': 'Celebrate your birthday with us — the dessert is on us. A table for family and friends, warm words from the team and photos to remember.',
      'pr.p1m': 'On the day of the celebration · advance booking required',
      'pr.p1cta': 'Book a celebration',
      'pr.p2_over': 'Offer', 'pr.p2t': 'Weekdays from 9:00',
      'pr.p2d': 'Join us for breakfast on weekdays — coffee comes free with any breakfast. Start the day calmly, without queuing at a coffee machine.',
      'pr.p2m': 'Mon–Fri · 9:00–12:00',
      'pr.p2cta': 'Breakfasts on the menu',
      'pr.p3_over': 'Event', 'pr.p3t': 'Ratatuy Saturday',
      'pr.p3d': 'Once a month, on the last Saturday, we host a big family dinner: a shared table, a special menu from the cooks and an unhurried evening for regulars. Seats are limited — book ahead.',
      'pr.p3m': 'Last Saturday of the month · 17:00 · booking required',
      'pr.alt1': 'A homemade berry dessert',
      'pr.alt2': 'A cup of coffee on a wooden table',
      'pr.alt3': 'A shared table with dishes for a family dinner',
      'pr.p3cta': 'Reserve a seat',
      'pr.note': 'Ask about offer terms by phone or on Telegram — if the day is special, we will suggest how to arrange it best.',
      'pr.band_over': 'Booking',
      'pr.band_title': 'Tell us about your day',
      'pr.band_p': 'Leave a request — we will pick the hall, time and menu for your company.',
      'pr.band_cta': 'Book a table',

      'booking.meta_title': 'Booking and contacts — Ratatuy',
      'booking.meta_desc': 'Book a table at the Ratatuy restaurant on Uralmash: request form, phone, Telegram. 34 Uralmashovskikh St., Yekaterinburg.',
      'bk.title': 'Book a table',
      'bk.lead': 'Leave a request — we will call back and confirm. Or message us on Telegram, it is faster.',
      'bk.band_over': 'Delivery',
      'bk.band_title': 'We will bring the hot food home',
      'bk.band_p': 'Order your favourite dishes to go — we are open 9:00–00:00. Confirm the exact zone and time by phone.',
      'bk.band_tg': 'Message us on Telegram', 'bk.band_call': 'Call',
      'ct.title': 'Contacts',
      'ct.addr': '34 Uralmashovskikh St., Yekaterinburg',
      'ct.addr_n': 'entrance from the plant side',
      'ct.hours': '9:00–00:00', 'ct.hours_n': 'daily',
      'ct.map': 'Open in Yandex Maps',
      'ct.note': 'Can’t get through — message us on Telegram, we reply during opening hours.',

      'form.name': 'Name', 'form.phone': 'Phone', 'form.date': 'Date', 'form.time': 'Time',
      'form.guests': 'Guests', 'form.g1': '1 guest', 'form.g2': '2 guests', 'form.g3': '3–4 guests', 'form.g4': '5 and more',
      'form.comment': 'Comment', 'form.opt': 'optional', 'form.submit': 'Send request',
      'form.err_name': 'Please tell us your name', 'form.err_phone': 'Leave a phone number so we can call back',
      'form.err_date': 'Choose a date', 'form.err_time': 'Choose a time',
      'form.ok': 'Thank you! Your request is ready — call us or message us on Telegram so we can confirm the table.'
    }
  };

  var LANG_KEY = 'rantatuy-lang';
  function page() { return document.body.getAttribute('data-page') || 'home'; }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.ru;
    var pg = page();
    document.documentElement.lang = lang;
    if (dict[pg + '.meta_title']) document.title = dict[pg + '.meta_title'];
    if (dict[pg + '.meta_desc']) {
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', dict[pg + '.meta_desc']);
    }
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
      var active = btns[k].getAttribute('data-lang') === lang;
      btns[k].classList.toggle('is-active', active);
      btns[k].setAttribute('aria-pressed', active ? 'true' : 'false');
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
      btns[i].addEventListener('click', function () { applyLang(this.getAttribute('data-lang')); });
    }
  }

  /* Липкая мобильная панель */
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
      if (foot) nearBottom = foot.getBoundingClientRect().top < window.innerHeight * 1.2;
      var show = y > 640 && !nearBottom;
      bar.hidden = !show;
      document.body.classList.toggle('has-sticky', show && window.matchMedia('(max-width: 1023.98px)').matches);
      ticking = false;
    }
    function onScroll() { if (!ticking) { window.requestAnimationFrame(update); ticking = true; } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    var closeBtn = document.getElementById('stickyclose');
    if (closeBtn) closeBtn.addEventListener('click', function () {
      bar.hidden = true;
      document.body.classList.remove('has-sticky');
      try { sessionStorage.setItem('rantatuy-sticky-closed', '1'); } catch (e) {}
    });
  }

  /* Форма брони */
  function initForm() {
    var form = document.getElementById('bookform');
    if (!form) return;
    var ok = document.getElementById('formok');
    var dateInput = document.getElementById('f-date');
    if (dateInput) {
      var t = new Date();
      dateInput.min = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
    }
    function dict(key) {
      var lang = document.documentElement.lang || 'ru';
      return (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || '';
    }
    function setErr(input, errId, msg) {
      var el = document.getElementById(errId);
      if (msg) { el.textContent = msg; input.setAttribute('aria-invalid', 'true'); }
      else { el.textContent = ''; input.removeAttribute('aria-invalid'); }
    }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = document.getElementById('f-name');
      var phone = document.getElementById('f-phone');
      var time = document.getElementById('f-time');
      var valid = true;
      if (name.value.trim().length < 2) { setErr(name, 'err-name', dict('form.err_name')); valid = false; } else setErr(name, 'err-name', '');
      if (phone.value.replace(/\D/g, '').length < 10) { setErr(phone, 'err-phone', dict('form.err_phone')); valid = false; } else setErr(phone, 'err-phone', '');
      if (!dateInput.value) { setErr(dateInput, 'err-date', dict('form.err_date')); valid = false; } else setErr(dateInput, 'err-date', '');
      if (!time.value) { setErr(time, 'err-time', dict('form.err_time')); valid = false; } else setErr(time, 'err-time', '');
      if (!valid) {
        var bad = form.querySelector('[aria-invalid="true"]');
        if (bad) bad.focus();
        return;
      }
      ok.textContent = dict('form.ok');
      ok.hidden = false;
      ok.setAttribute('tabindex', '-1');
      ok.focus();
      form.reset();
    });
  }

  function boot() { initLang(); initSticky(); initForm(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
