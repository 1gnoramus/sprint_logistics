
        // Scroll to the form after pressing the request button
        function scrollToForm() {
			    document.getElementById("form_container").scrollIntoView({block: "center", behavior: "smooth"})
		    }

        // Grid Popup is active
        function showPopup(itemIndex){
            //Show Grid Popup
            var services_item_popup = document.getElementById('services_item_popup');
            services_item_popup.classList.toggle('active');
            // Disable page scrolling
            document.body.classList.add("no-scroll");
            // Adding blur bacground
            const overlay = document.getElementById("overlay");
            overlay.classList.add("blur");


            // Options for grid with info for the Grid Popup
            if (itemIndex == 0) {
                services_item_popup.innerHTML = "<h2>Полные фуры из Европы, России, Турции и Китая</h2><p>Sprint Logistics поможет Вам забрать Ваш груз из любой точки Европы, России, Турции, Китая и доставить на полной фуре в Казахстан по самой низкой цене и в кратчайшие сроки!</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button><a href=\"./services_ftl.html\" style=\"color: inherit; text-decoration: none;\">Читать подробнее</a></div>"
            }   
            else if (itemIndex == 1) {
                    services_item_popup.innerHTML = "<h2>ЖД перевозки из Европы</h2><p>Sprint Logistics предоставляет универсальный парк вагонов для импорта, экспорта, а также перевозок внутри Казахстана</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button><a href=\"./services_railways.html\" style=\"color: inherit; text-decoration: none;\">Читать подробнее</a></div>";
                } else if (itemIndex == 2) {
                   services_item_popup.innerHTML = "<h2>Контейнерные перевозки из Китая</h2><p>Sprint Logistics поможет Вам забрать Ваш груз из любой точки Китая и доставить на Авто или ЖД в Казахстан по самой низкой цене и в кратчайшие сроки</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 3) {
                   services_item_popup.innerHTML = "<h2>Доставка негабаритных грузов о Казахстану</h2><p>Lorem ipsum dolor sit amet.</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button><a href=\"./services_special.html\" style=\"color: inherit; text-decoration: none;\">Читать подробнее</a></div>";
                } else if (itemIndex == 4) {
                   services_item_popup.innerHTML = "<h2>Доставка опасных грузов</h2><p>Специалисты компании Sprint Logistics имеют опыт в перевозке опасных грузов и помогут Вам организовать безопасную доставку до места назначения</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 5) {
                   services_item_popup.innerHTML = "<h2>Груза требующие температурного режима</h2><p>Sprint Logistics поможет организовать доставку грузов, которые необходимо перевозить с соблюдением особого температурного режима</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 6) {
                   services_item_popup.innerHTML = "<h2>Мультимодальные перевозки</h2><p>Команда Sprint Logistics поможет Вам с перевозкой грузов разными видами транспорта АВТО, Ж/Д, АВИА, Морем по всему миру в Казахстан</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 7) {
                   services_item_popup.innerHTML = "<h2>Погрузочно-разгрузочные работы</h2><p>По запросу клиента, Sprint Logistics может предоставить погрузочную технику и грузчиков для работ ПРР груза по месту отправления либо назначения</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 8) {
                   services_item_popup.innerHTML = "<h2>Проектная перевозка</h2><p>Sprint Logistics поможет организовать доставку грузов с привлечением большого количества транспортных средств под большой объём и контракт</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 9) {
                   services_item_popup.innerHTML = "<h2>Охранное сопровождение груза</h2><p>Sprint Logistics может предоставить военизировонную охрану для перевозки Ваших специфичных товаров</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 10) {
                   services_item_popup.innerHTML = "<h2>Страхование груза</h2><p>Sprint Logistics предоставляет услуги по страхованию груза по всему маршруту перевозки</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } else if (itemIndex == 11) {
                   services_item_popup.innerHTML = "<h2>Брокерские услуги</h2><p>Sprint Logistics Предоставляет брокерских услуг вместе с грузоперевозкой в режиме \"одного окна\", по единому договору</p><div class=\"grid_button_row\"><button class='grid_close_button'onclick=\"closePopup()\"> Закрыть</button></div>";
                } 
            }
            // Grid Popup is unactive
        function closePopup(){
            // Remove blur background
            overlay.classList.remove("blur")
            // Able page scrolling
            document.body.classList.remove("no-scroll");
            // Hide Grid Popup
            var services_item_popup = document.getElementById('services_item_popup');
            services_item_popup.classList.toggle('active');
        }
        // CHANGE LANGUAGE
        function switchLanguage(lang) {
            // Get the necessary elements
const currentLang = document.querySelector('.current_lang');
const selectedLang = document.querySelector('.selected_lang');

// Add an event listener to each language link
const langLinks = document.querySelectorAll('.lang_menu ul li a');
langLinks.forEach(function(link) {
   link.addEventListener('click', function(e) {
      e.preventDefault(); // prevent the link from reloading the page

      // Change the current language text
      currentLang.textContent = link.textContent;

      // Change the current language background image
      selectedLang.classList.remove('rus', 'eng'); // remove all previous classes
      if (link.classList.contains('rus')) {
         selectedLang.classList.add('rus');
      } else if (link.classList.contains('eng')) {
         selectedLang.classList.add('eng');
      }
   });
});
          }

        function changeLanguage(lang) {
            var elements = document.querySelectorAll('[data-lang]');
            for (var i = 0; i < elements.length; i++) {
                var key = elements[i].getAttribute('data-lang');
                if (lang === 'en') {
                elements[i].textContent = langData[key].en;
                } else {
                elements[i].textContent = langData[key].ru;
                }
            }            }

            var langData = {
            // INDEX PAGE + GENERAL
            'call_button': {
                'en': 'Call us',
                'ru': 'Заказать звонок'
            },
            'request_button': {
                'en': 'Online request',
                'ru': 'Онлайн заявка'
            },
            'nav_home': {
                'en': 'Home',
                'ru': 'Главная'
            },
            'nav_about': {
                'en': 'About us',
                'ru': 'О компании'
            },
            'nav_services': {
                'en': 'Services',
                'ru': 'Услуги'
            },
            'nav_services_lcl': {
                'en': 'LCL consolidation from China',
                'ru': 'АВТО / ЖД - Консолидации из Китая (LCL)'
            },
            'nav_services_avia': {
                'en': 'Air delivery from China to Kazakhstan',
                'ru': 'Авиа доставка  из Китая в Казахстан'
            },
            'nav_services_ftl': {
                'en': 'FTL from China',
                'ru': 'Полные фуры из Китая  (FTL)'
            },
            'nav_services_eur': {
                'en': 'FTL and consolidation from Europe',
                'ru': 'Полные фуры и консолидация из Европы'
            },
            'nav_services_railways': {
                'en': 'Railway transportation in Kazakhstan and Central Asia',
                'ru': 'ЖД перевозки по Казахстану и Средней Азии'
            },
            'nav_services_special': {
                'en': 'Delivery of oversized cargo within Kazakhstan',
                'ru': 'Доставка негабаритных грузов по территории Казахстана'
            },
            'nav_geography': {
                'en': 'Transportation geography',
                'ru': 'География перевозок'
            },
            'nav_contacts': {
                'en': 'Contacts',
                'ru': 'Контакты'
            },
            'index_intro_title':{
                'ru': 'SPRINT LOGISTICS: Ваш бизнес - Наша логистика',               
                'en': 'SPRINT LOGISTICS: Your business - Our logistics'
            },
            'index_intro_subtitle_1':{
                'en': "\“Sprint Logistics\” is a modern logistics company specializing in providing freight forwarding services from China, Turkey, Russia and European countries by various means of transportation.",
                'ru': "\«Sprint Logistics\» - современная логистическая компания специализирующаяся на предоставлении услуг экспедирования грузов из Китая, Турции, России и стран Европы разными видами транспорта."
            },
            'index_intro_subtitle_2':{
                'en': "The team of specialists at \“Sprint Logistics\” offers optimal and fast ways of delivering various cargoes at the most favorable rates.",
                'ru': "Команда специалистов \«Sprint Logistics\» предлагает оптимальные и быстрые способы доставки различных грузов по наиболее выгодным тарифам."
            },
            'index_about_title':{
                'en': "About us",
                'ru': "О компании Sprint Logistics"
            },
            'index_about_piece1_title':{
                'en': "WHO ARE WE?",
                'ru': "КТО МЫ?"
            },
            'index_about_piece1_subtitle':{
                'ru': "Мы прогрессивная и опытная команда профессионалов в сфере логистики, специализирующаяся на доставке коммерческих грузов и из Китая, России, стран Западной и Восточной Европы в Казахстан и Центральную Азию",
                'en': "We are a progressive and experienced team of logistics professionals specializing in the delivery of commercial goods from China, Russia, Western and Eastern Europe to Kazakhstan and Central Asia."
            },
            'index_about_piece2_title':{
                'en': "HOW DO WE WORK?",
                'ru': "КАК МЫ РАБОТАЕМ?"
            },
            'index_about_piece2_subtitle':{
                'en': "Thanks to our vast experience in the domestic B2B cargo transportation market, we are ready to provide your company with first-class service and an individual approach in solving your everyday, as well as global logistics tasks.",
                'ru': "Благодаря нашему огромному опыту работы на отечественном B2B рынке грузоперевозок, мы готовы предоставить вашей компании первоклассный сервис и индивидуальный подход в решении ваших будничных, а также глобальных логистических задач."
            },
            'index_about_piece3_title':{
                'en': "WHAT DO WE OFFER YOU?",
                'ru': "ЧТО МЫ ПРЕДЛАГАЕМ?"
            },
            'index_about_piece3_subtitle':{
                'en': "SPRINT LOGISTICS will help you pick up your cargo from anywhere in China, Russia, Turkey, Europe and deliver it to Kazakhstan at the lowest price and in the shortest possible time!",
                'ru': "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая, России, Турции, Европа и доставить в Казахстан по самой низкой цене и в кратчайшие сроки!"
            },
            'index_services_title':{
                'en': "Our services",
                'ru': "Наши услуги"
            },
            'index_advantages_title':{
                'en': "Advantages of transportation with Sprint Logistics",
                'ru': "Преимущества перевозок со Sprint Logistics"
            },
            'index_advantages_piece1':{
                'en': "Competitive prices",
                'ru': "Конкурентоспособные цены"
            },
            'index_advantages_piece2':{
                'en': "Personal Manager",
                'ru': "Персональный менеджер"
            },
            'index_advantages_piece3':{
                'en': "Logistics experts",
                'ru': "Эксперты в области логистики"
            },
            'index_advantages_piece4':{
                'en': "Wide geography of transportation",
                'ru': "Широкая география перевозок"
            },
            'index_advantages_piece5':{
                'en': "Transportation of all types of cargo",
                'ru': "Транспортировка всех типов грузов"
            },
            'index_advantages_piece6':{
                'en': "Quality service",
                'ru': "Качественный сервис"
            },
            'form_info_title':{
                'en': "For a quick calculation of the delivery of your cargo, leave your request here",
                'ru': "Для быстрого просчета доставки Вашего груза оставьте свой запрос здесь"
            },
            'form_info_subtitle':{
                'en': "Leave your contacts below and we will contact you!",
                'ru': "Оставьте Ваши контакты ниже и мы с Вами свяжемся!"
            },
            'footer_sub_logo':{
                'en': "freight forwarding company",
                'ru': "транспортно-экспедиторская компания"
            },
            'footer_text_1':{
                'ru': "Казахстан, г. Алматы, ул. Мынбаева, 46",
                'en': "Kazakhstan, Almaty, Mynbayeva str., 46"
            },
            'footer_text_2':{
                'en': "Opening hours: Mon. – Fri.: from 9:00 to 18:00",
                'ru': "График работы: Пн. – Пт.: с 9:00 до 18:00"
            },
            'footer_text_3':{
                'en': "Phone: +7 701 581 0999",
                'ru': "Телефон: +7 701 581 0999"
            },
            'footer_text_4':{
                'en': "E-mail: marketing@splog.com.kz",
                'ru': "Почта: marketing@splog.com.kz"
            },
            'footer_text_5':{
                'en': "Contact us:",
                'ru': "Свяжитесь с нами:"
            },
            'footer_col2_title':{
                'en': "About the company",
                'ru': "О компании"
            },
            'footer_col2_piece1':{
                'en': "About us",
                'ru': "О нас"
            },
            'footer_col2_piece2':{
                'en': "Our services",
                'ru': "Наши услуги"
            },
            'footer_col2_piece3':{
                'en': "Advantages of working with us",
                'ru': "Преимущества работы с нами"
            },
            'footer_col2_piece4':{
                'en': "Our team",
                'ru': "Наша команда"
            },
            'footer_col2_piece5':{
                'en': "Partner reviews",
                'ru': "Отзывы партнеров"
            },
            'footer_col3_title':{
                'en': "Services",
                'ru': "Услуги"
            },
            'footer_col3_piece_1':{
                'en': "Consolidation from China",
                'ru': "Консолидация из Китая"
            },
            'footer_col3_piece_2':{
                'en': "",
                'ru': "Авиа доставка в Казахстан"
            },
            'footer_col3_piece_3':{
                'en': "Full trucks from China",
                'ru': "Полные фуры из Китая"
            },
            'footer_col3_piece_4':{
                'en': "Full trucks and consolidation from Europe",
                'ru': "Полные фуры и консолидация из Европы"
            },
            'footer_col3_piece_5':{
                'en': "Railway transportation in Central Asia",
                'ru': "ЖД перевозки по Средней Азии"
            },
            'footer_col3_piece_6':{
                'en': "Delivery of oversized cargo",
                'ru': "Доставка негабаритных грузов"
            },
            // GEOGRAPHY PAGE
            'geogr_intro_subtitle1':{
                'en': "SPRINT LOGISTICS carries out cargo transportation in all major popular destinations among Kazakhstani importing companies.",
                'ru': "\"SPRINT LOGISTICS\" осуществляет перевозки грузов по всем основным популярным направлениям, среди казахстанских компаний импортёров."
            },
            'geogr_intro_subtitle2':{
                'en': "List of countries - European Union countries, Turkey, Russian Federation, Azerbaijan, Iran, Afghanistan, Uzbekistan, Kyrgyzstan, Japan, China",
                'ru': "Список стран  - страны Европейского Союза, Турция Российская Федерация, Азербайджан, Иран, Афганистан, Узбекистан, Кыргызстан, Япония, Китай"
            },
            'geogr_intro_title':{
                'en': "GEOGRAPHY OF TRANSPORTATION",
                'ru': "ГЕОГРАФИЯ ПЕРЕВОЗОК"
            },
            'geogr_about_title1':{
                'en': "EUROPEAN UNION COUNTRIES",
                'ru': "СТРАНЫ ЕВРОПЕЙСКОГО СОЮЗА"
            },
            'geogr_about_subtitle1':{
                'en': "Having many years of experience in international transportation, the company's specialists will help you deliver cargo from the countries of the European Union quickly, safely and at optimal rates",
                'ru': "Имея многолетний опыт работы в международных перевозках, специалисты компании помогут Вам доставить груз из стран Европейского союза быстро, безопасно и по оптимальным тарифам"
            },
            'geogr_about_title2':{
                'en': "CHINA",
                'ru': "КИТАЙ"
            },
            'geogr_about_subtitle2':{
                'en': "The Sprint Logistics team will help you deliver various cargoes from China to Kazakhstan by all means of transport, including auto, railway and air",
                'ru': "Команда Sprint Logistics поможет Вам доставить различные грузы из Китая в Казахстан всеми видами транспорта, включая авто, ЖД и авиа"
            },
            'geogr_about_title3':{
                'en': "TURKEY",
                'ru': "ТУРЦИЯ"
            },
            'geogr_about_subtitle3':{
                'en': "Exporting goods from Turkey is becoming a more profitable option for local distributors every year, so Spriny Logistics will be happy to help you organize transportation from this country",
                'ru': "Экспорт товаров из Турции с каждым годом становится более выгодным вариантом для местных дистрибьюторов, поэтому компания Spriny Logistics будет рада помочь Вам в организации перевозок из этой страны"
            },
            'geogr_about_title4':{
                'en': "KAZAKHSTAN AND CENTRAL ASIA",
                'ru': "КАЗАХСТАН И СРЕДНЯЯ АЗИЯ"
            },
            'geogr_about_subtitle4':{
                'en': "Sprint Logistics company offers you a universal fleet of wagons for loading on the territory of Kazakhstan and the countries of Central Asia",
                'ru': "Компания Sprint Logistics предлагает Вам универсальный парк вагонов под погрузку по территории Казахстана и странам Средней Азии"
            },
            'avia_intro_title':{
                'en': "Air delivery from China to Kazakhstan",
                'ru': "Авиа доставка из Китая в Казахстан"
            },
            'avia_intro_subtitle1':{
                'en': "SPRINT LOGISTICS will help you pick up your cargo from anywhere in China and deliver it by air to Kazakhstan at the lowest price and in the shortest possible time!",
                'ru': "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая и доставить авиатранспортом в Казахстан по самой низкой цене и в кратчайшие сроки!"
            },
            'avia_adv_title':{
                'en': "The advantage of Air delivery from China:",
                'ru': "Преимущество Авиа доставки из Китая:"
            },
            'avia_adv_piece1':{
                'en': "The delivery speed is up to 6 days, taking into account the pick-up date.",
                'ru': "Скорость доставки до 6 дней с учетом даты забора."
            },
            'avia_adv_piece2':{
                'en': "Cargo pickup from the sender's address in any city of China",
                'ru': "Забор груза с адреса отправителя в любом городе Китая"
            },
            'avia_adv_piece3':{
                'en': "Direct flights, exact departure dates",
                'ru': "Прямые рейсы, точные даты вылета"
            },
            'avia_adv_piece4':{
                'en': "Export clearance",
                'ru': "Экспортное оформление "
            },
            'eur_intro_title':{
                'en': "Full trucks and consolidation from Europe",
                'ru': "Полные фуры и консолидация из Европы"
            },
            'eur_intro_subtitle':{
                'en': "SPRINT LOGISTICS will help you pick up your cargo from Europe and deliver it by road to Kazakhstan at the lowest price and in the shortest possible time! cargo delivery from Europe to Kazakhstan",
                'ru': "SPRINT LOGISTICS поможет Вам забрать Ваш груз из Европы и доставить автотранспортом в Казахстан по самой низкой цене и в кратчайшие сроки! доставки грузов из Европы в Казахстан"
            },
            'eur_adv_title':{
                'en': "Features of cargo delivery from Europe to Kazakhstan",
                'ru': "Особенности доставки грузов из Европы в Казахстан"
            },
            'eur_adv_piece1_title':{
                'en': "The popularity of cargo delivery from Europe to Kazakhstan",
                'ru': "Популярность доставки грузов из Европы в Казахстан"
            },
            'eur_adv_piece1_subtitle':{
                'en': "To date, cargo delivery from Europe to Kazakhstan is one of the most basic types of cargo transportation services in great demand among domestic importing companies",
                'ru': "На сегодняшний день доставка грузов из Европы в Казахстан является одним из самых основных видов услуг по грузоперевозке пользующейся огромным спросом среди отечественных компаний - импортеров"
            },
            'eur_adv_piece2_title':{
                'en': "High requirements for the safety of transportation from the European Union",
                'ru': "Высокие требования к безопасности перевозок из Евросоюза"
            },
            'eur_adv_piece2_subtitle':{
                'en': "Due to the high quality and manufacturability of goods from the European Union, there are certain requirements for the safety of transportation in this direction",
                'ru': "Из-за высокого качества и технологичности товаров из Евросоюза существуют определенные требования к безопасности перевозок по данному направлению"
            },
            'eur_adv_piece3_title':{
                'en': "Auto cargo transportation is a safe and profitable way of delivery",
                'ru': "Авто грузоперевозка - безопасный и выгодный способ доставки"
            },
            'eur_adv_piece3_subtitle':{
                'en': "The safest and most profitable way of delivery from Europe to Kazakhstan is automobile cargo transportation, namely: consolidation and full trucks",
                'ru': "Самым безопасным и выгодным способом доставки из Европы в Казахстан является автомобильная грузоперевозка а именно: консолидацией и полными фурами"
            },
            'ftl_intro_title':{
                'en': "Full Trucks from China (FTL)",
                'ru': "Полные фуры из Китая (FTL)"
            },
            'ftl_intro_subtitle':{
                'en': "SPRINT LOGISTICS will help you pick up your cargo from anywhere in China and deliver it on a full truck to Kazakhstan at the lowest price and in the shortest possible time!",
                'ru': "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая и доставить на полной фуре в Казахстан по самой низкой цене и в кратчайшие сроки!"
            },
            'ftl_adv_intro':{
                'en': "Trucking from China to Kazakhstan on full trucks is one of the most popular ways to deliver cargo from China and is in great demand among Kazakhstani importing companies due to a number of reasons:",
                'ru': "Автоперевозки из Китая в Казахстан на полных фурах являются одним из самых популярных способов доставки груза из Китая и пользуются большим спросом у Казахстанских компаний импортеров из за ряда причин:"
            },
            'ftl_adv_piece1':{
                'en': "Fast delivery time (up to 25 days)",
                'ru': "Быстрый срок доставки (до 25 дней)"
            },
            'ftl_adv_piece2':{
                'en': "Pick-up from anywhere in China and delivery to any city or locality in Kazakhstan without unnecessary overloads in storage warehouses and damage to the cargo.",
                'ru': "Забор из любой точки Китая  и доставка в любой город либо населенный пункт в Казахстане без лишних перегрузов на складах хранения  и вреда грузу."
            },
            'ftl_adv_piece3':{
                'en': "The possibility of Door–to-Door delivery, taking into account delivery in the city, after customs clearance of the cargo at the warehouse directly to the customer's address.",
                'ru': "Возможность доставки «Дверь – Дверь», с учетом доставки по городу, после таможенной очистки груза на СВХ напрямую на адрес клиента."
            },
            'ftl_adv_piece4':{
                'en': " Profitable delivery of bulk, but light cargo. Cubic capacity of auto trucks: from 86 – 105 cubic meters compared to a 40-foot railway container : up to 76.5 cubic meters)",
                'ru': " Выгодная доставка объемных, но легких грузов. Кубатура авто фур: от 86 – 105 куб. метров по сравнению  40 футового ж/д контейнера : до 76.5 куб метров)"
            },
            'ftl_adv_piece5':{
                'en': "Cheaper than Air and faster than railway delivery",
                'ru': "Дешевле чем Авиа и быстрее чем ЖД доставка"
            },
            'lcl_intro_title':{
                'en': "AUTO/RAILWAY Consolidation from China (LCL)",
                'ru': "АВТО / ЖД - Консолидации из Китая (LCL)"
            },
            'lcl_intro_subtitle':{
                'en': "SPRINT LOGISTICS will help you pick up your cargo from anywhere in China and deliver Auto and railway consolidation to Kazakhstan at the lowest price and in the shortest possible time",
                'ru': "SPRINT LOGISTICS поможет Вам забрать Ваш груз из любой точки Китая и доставить Авто и ЖД консолидацией в Казахстан по самой низкой цене и в кратчайшие сроки"
            },
            'lcl_adv_title':{
                'en': "Advantages of Cargo consolidation from China",
                'ru': "Преимущества консолидации грузов из Китая "
            },
            'lcl_adv_piece1_title':{
                'en': "Reducing logistics costs",
                'ru': "Сокращение расходов на логистику"
            },
            'lcl_adv_piece1_subtitle':{
                'en': "Many Chinese manufacturers can independently deliver cargo to our transshipment points, which significantly reduces logistics costs for the importer in Kazakhstan",
                'ru': "Многие Китайские производители могут самостоятельно доставлять груз на наши перевалочные пункты, что существенно сокращает расходы на логистику для импортера в Казахстане"
            },
            'lcl_adv_piece2_title':{
                'en': "Reducing storage costs",
                'ru': "Уменьшение затрат на хранения "
            },
            'lcl_adv_piece2_subtitle':{
                'en': "Reducing the cost of storing cargo in the importer's country, since only the volume of goods already sold is brought",
                'ru': "Снижение затраты на хранение груза в стране импортёра, так как привозится только объём уже реализованного товара"
            },
            'lcl_adv_piece3_title':{
                'en': "Reduction of customs risks",
                'ru': "Снижение таможенных рисков"
            },
            'lcl_adv_piece3_subtitle':{
                'en': "Shipments of bulk cargo from China reduce customs risks and inspections, as our team of specialists conducts a thorough check of all cargo documentation during the consolidation of a container or truck",
                'ru': "Отправки сборного груза из Китая снижают таможенные риски и досмотры, так как нашей командой специалистов проводится тщательная проверка всей документации на груз при консолидации контейнера либо фуры "
            },
            'lcl_adv_piece4_title':{
                'en': "Fast dispatch of small-sized cargo",
                'ru': "Быстрая отправка малогабаритного груза "
            },
            'lcl_adv_piece4_subtitle':{
                'en': "This is the best option for sending when you need to receive a small-sized cargo or a small batch of goods in the shortest possible time",
                'ru': "Это лучший вариант отправки, когда нужно получить малогабаритный груз или небольшую партию товара в кратчайший срок"
            },
            'lcl_adv_piece5_title':{
                'en': "Savings on delivery",
                'ru': "Экономия на доставке"
            },
            'lcl_adv_piece5_subtitle':{
                'en': "The customer does not pay for the delivery of the entire container or truck, but only the place occupied by the purchased products as part of the consolidation. Due to this, the cost of transportation for each commodity unit is reduced, and the customer can save well on the purchase and delivery of goods from abroad",
                'ru': "Клиент оплачивает за доставку не всего контейнера либо фуры, а только то место, которое занимает купленная продукция в составе консолидации. За счет этого снижается стоимость перевозки для каждой товарной единицы, и заказчик может хорошо сэкономить на покупке и доставке товара из заграницы"
            },
            'lcl_adv_piece6_title':{
                'en': "Consolidation of goods",
                'ru': "Консолидация товаров"
            },
            'lcl_adv_piece6_subtitle':{
                'en': "The customer can order many separate categories of goods from different suppliers in China and receive them at the same time",
                'ru': "Клиент может заказать множество отдельных категорий товаров от разных поставщиков в Китае и получить их одновременно"
            },
            'railways_intro_title':{
                'en': "Railway transportation in Kazakhstan and Central Asia",
                'ru': "ЖД перевозки по Казахстану и Средней Азии"
            },
            'railways_intro_subtitle':{
                'en': "SPRINT LOGISTICS provides a universal fleet of wagons for import, export, as well as transportation within Kazakhstan",
                'ru': "SPRINT LOGISTICS предоставляет универсальный парк вагонов для импорта, экспорта, а также перевозок внутри Казахстана"
            },
            'railways_about_title':{
                'en': "SPRINT LOGISTICS company offers railway transportation services in Kazakhstan and",
                'ru': "Компания SPRINT LOGISTICS предлагает услуги ЖД перевозок по Казахстану и"
            },
            'railways_about_piece1':{
                'en': "Universal fleet of wagons (covered wagons, grain carriers, gondola cars, etc.)",
                'ru': "Универсальный парк вагонов (крытые вагоны, зерновозы, полувагоны и т.д.)"
            },
            'railways_about_piece2':{
                'en': "Calculation and payment of Railway tariffs for all territories",
                'ru': "Расчёт и оплата Ж/Д тарифов по всем территориям"
            },
            'railways_about_piece3':{
                'en': "Dislocation by wagons (tracking)",
                'ru': "Дислокация по вагонам (слежение)"
            },
            'railways_about_piece4':{
                'en': "Transportation across Kazakhstan, to Europe and to Central Asia",
                'ru': "Перевозки по Казахстану, в Европу и в Среднюю Азию"
            },
            'railways_about_piece5':{
                'en': "Extensive experience in export and import railway transportation",
                'ru': "Большой опыт работы в экспортных и импортных ЖД перевозках"
            },
            'special_intro_title':{
                'en': "Delivery of oversized cargo on the territory of Kazakhstan",
                'ru': "Доставка негабаритных грузов по территории Казахстана"
            },
            'special_intro_subtitle':{
                'en': "One of the main activities of Sprint Logistics is the delivery of special equipment and oversized cargo on the route China - Kazakhstan border and across Kazakhstan",
                'ru': "Одним из основных направлений деятельности компании Sprint Logistics является доставка специальной техники и негабаритных грузов по маршруту граница Китая - Казахстан и по Казахстану"
            },
            'special_about_rw_title':{
                'en': "List of services for delivery by rail",
                'ru': "Список услуг при доставке железнодорожным транспортом "
            },
            'special_about_rw_li1':{
                'en': "Delivery of special equipment to the terminal (railway dead end) in the city;",
                'ru': "Доставка спец.техники до терминала (ЖД тупика) по городу;"
            },
            'special_about_rw_li2':{
                'en': "Registration and approval of the transportation plan;",
                'ru': "Оформление и согласование плана перевозки;"
            },
            'special_about_rw_li3':{
                'en': "Terminal services (railway dead end rental);",
                'ru': "Услуги терминала (аренда ЖД тупика);"
            },
            
            'special_about_rw_li4':{
                'en': "Payment of fees at the departure station;",
                'ru': "Оплата сборов на станции отправления;"
            },
            'special_about_rw_li5':{
                'en': "Provision of rolling stock (univ.platforms);",
                'ru': "Предоставление подвижного состава (унив.платформы);"
            },
            'special_about_rw_li6':{
                'en': "Loading, fastening and linking of cargo, including consumables;",
                'ru': "Погрузка, крепление и увязка груза, включая расходные материалы;"
            },
            'special_about_rw_li7':{
                'ru': "Оплата железнодорожного тарифа по всему маршруту (Казахстан, Узбекистан, Кыргызстан, Туркменистан);",
                'en': "Payment of the railway fare along the entire route (Kazakhstan, Uzbekistan, Kyrgyzstan, Turkmenistan);"
            },
            'special_about_rw_li8':{
                'en': "Collection of Equipment from China from Altynkol Export and Dostyk transshipment stations and further shipment throughout Central Asia;",
                'ru': "Забор Техники с Китая с перегрузочных станций Алтынколь Экспорт и Достык экспорт и дальнейшая отправка по всей Центральной Азии;"
            },
            'special_about_rw_li9':{
                'en': "Security support of equipment en route;",
                'ru': "Охранное сопровождение техники в пути следования;"
            },
            'special_about_rw_li10':{
                'en': "Expenses at the destination station (terminal/railway dead end services + delivery of special equipment to the address); Daily tracking of the car;",
                'ru': "Расходы на станции назначения (услуги терминала/жд тупика + доставка спец.техники до адреса);                Ежедневное слежение за вагоном;"
            },
            'special_about_rw_li11':{
                'en': "Daily tracking of the car;",
                'ru': "Ежедневное слежение за вагоном;"
            },
            'special_about_auto_title':{
                'ru': "Список услуг при доставке автомобильным транспортом",
                'en': "List of services for delivery by road"
            },
            'special_about_auto_li1':{
                'en': "Provision of a specialized vehicle with a load capacity from 40 - 200 tons (trawls, platforms, etc.)",
                'ru': "Предоставление специализированного транспортного средства с грузоподъёмностью от 40 - 200 тонн (тралы, площадки и тд)"
            },
            'special_about_auto_li2':{
                'en': "Provision of special loading equipment (cranes, manipulators)",
                'ru': "Предоставление специальной погрузочной техники (краны, манипуляторы)"
            },
            'special_about_auto_li3':{
                'en': "Rigging works",
                'ru': "Такелажные работы"
            },
            'special_about_auto_li4':{
                'en': "Registration of special permits for the transportation of oversized cargo in the Republic of Kazakhstan and neighboring countries",
                'ru': "Оформление специальных разрешений на перевозку негабаритных грузов по РК и ближнего зарубежья"
            },
            'special_about_auto_li5':{
                'en': "Escort on the way (car cover)",
                'ru': "Сопровождение в пути (автомобиль прикрытие)"
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },
            '':{
                'en': "",
                'ru': ""
            },

        };
