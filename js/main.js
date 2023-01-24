
    document.getElementById('send_request_button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display='none'});


    document.getElementById('button').addEventListener('click', 
    function(){
        document.querySelector('.bg-modal').style.display='flex';
        document.querySelector
    });
    document.getElementById('button2').addEventListener('click', 
    function(){
        scrollToTop();
        document.querySelector('.bg-modal').style.display='flex';
        document.querySelector
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