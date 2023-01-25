
    // const init = function(){
    //     document.getElementById('close').addEventListener('click',reset)
    //     document.getElementById('send_request_button').addEventListener('click',send)

    // }

    // const reset = function(ev){
    //     // функция возвращает форму в начальное положение/удаляет данные с полей ввода
    //     ev.preventDefault();
    //     document.getElementById('form').reset();
    // }

    // const send = function(ev){
    //     ev.preventDefault();
        
    // }

    function take_value(){
        var username = document.getElementById('username').value;
        var phone = document.getElementById('phone').value;
        document.write(username);
        document.write(phone);
    }

    document.getElementById('send_request_button').addEventListener('click', 
    function(){
    document.querySelector('.bg-modal').style.display='none'});


    document.getElementById('button').addEventListener('click', 
    function(){
        document.querySelector('.bg-modal').style.display='flex';
    });

    document.getElementById('button2').addEventListener('click', 
    function(){
        scrollToTop();
        document.querySelector('.bg-modal').style.display='flex';
    });

    document.getElementById('close').addEventListener('click', 
    function(){
        document.querySelector('.bg-modal').style.display='none'
    });

    function onclicked(){
        swal("Ваш запрос отправлен в обработку! В ближайшее время мы с Вами свяжемся!");
    }

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

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
}

function othername() {
    var input = document.getElementById("username").value;
    alert(input);
}