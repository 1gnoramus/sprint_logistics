

    function take_value(){
        // ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНПУТА С ЗАПРОСА ЗВОНКА
        var username = document.getElementById('username').value;
        var phone = document.getElementById('phone').value;
        document.write(username);
        document.write(phone);
    }

    // ОТПРАВИТЬ ЗАПРОС И ЗАКРЫТЬ ФОРМУ
    document.getElementById('send_request_button').addEventListener('click', 
    function(){
    document.querySelector('.bg-modal').style.display='none'});

    // ОТКРЫТЬ ФОРМУ ЗАПРОСА ЗВОНКА
    document.getElementById('button').addEventListener('click', 
    function(){
        document.querySelector('.bg-modal').style.display='flex';
    });

    // ОТКРЫТЬ ФОРМУ ЗАПРОСА ЗВОНКА
    document.getElementById('button2').addEventListener('click', 
    function(){
        scrollToTop();
        document.querySelector('.bg-modal').style.display='flex';
    });

    // ПРОКРУТИТЬ СТРАНИЦУ НАВЕРХ
    function scrollToTop() {
        var position =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
            scrollAnimation = setTimeout("scrollToTop()", 10);
        } else clearTimeout(scrollAnimation);
    }

    // ЗАКРЫТЬ ФОРМУ ЗАПРОСА ЗВОНКА
    document.getElementById('close').addEventListener('click', 
    function(){
        document.querySelector('.bg-modal').style.display='none'
    });

    // ОТПРАВИТЬ ЗАПРОС НА ЗАЯВКУ
    function onclicked(){
        swal("Ваш запрос отправлен в обработку! В ближайшее время мы с Вами свяжемся!");
    }

    // СВАЙПЕР ДОСТИЖЕНИЙ НА ИНДЕКСНОЙ СТРАНИЦЕ
    const swiper = new Swiper('.swiper', { 
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        }, 
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
        },
    }
);


    // ДРУГОЙ СПОСОБ ВЫТАЩИТЬ ДАННЫЕ И ОТОБРАЗИТЬ
    function modal_send() {
        var input = document.getElementById("modal_username").value;
        
        var phone = document.getElementById('modal_phone').value;

        var data= input+phone
        
        alert(data);
    }

    function form_send() {
        var orderDetail = document.getElementById("form_orderDetail").value;
        
        var email = document.getElementById('form_email').value;
        
        var phone = document.getElementById('form_phone').value;

        var data = orderDetail+email+phone;
        
        alert(data);
    }