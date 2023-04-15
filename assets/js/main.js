
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
            }
            document.getElementById('language-code').textContent = lang.toUpperCase();
            }

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
                'ru': "О компании"
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
