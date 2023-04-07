
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
            }
        };
