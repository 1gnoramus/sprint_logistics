

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

// let existingData;

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "data/data.json", true);
// xhr.responseType = "json";
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     existingData = xhr.response;
//     updateData(existingData);
//     // continue to step 2
//   } else {
//     console.error("Error reading existing data:", xhr.statusText);
//   }
// };
// xhr.send();
// function updateData(data) {
//     const formData = {
//       username: document.getElementById("modal_username").value,
//       phone: document.getElementById("modal_phone").value
//     };
//     data.push(formData);
//     const xhr = new XMLHttpRequest();
//     xhr.open("PUT", "data/data.json", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(data));
// }
  
// СКАЧАТЬ JSON ФАЙЛ
// const form = document.getElementById("form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const formData = {
//     username: document.getElementById("modal_username").value,
//     phone: document.getElementById("modal_phone").value
//   };
//   const json = JSON.stringify(formData);
//   const blob = new Blob([json], {type: "application/json"});
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "form_data.json";
//   link.click();
// });


    // ДРУГОЙ СПОСОБ ВЫТАЩИТЬ ДАННЫЕ И ОТОБРАЗИТЬ
    // function modal_send() {
    //     var input = document.getElementById("modal_username").value;
        
    //     var phone = document.getElementById('modal_phone').value;

    //     var data= input+phone

    //     // fetch('./data/data.json').then(data => console.log(data)).catch(err => console.log(err))
    //     // window.showOpenFilePicker().then(data => console.log(data)).catch(err => console.log(err))

        
    //     alert(data);
    // }

    function form_send() {
        var orderDetail = document.getElementById("form_orderDetail").value;
        
        var email = document.getElementById('form_email').value;
        
        var phone = document.getElementById('form_phone').value;

        var data = orderDetail+email+phone;
        const fs = require('fs');


        writeFile('./../data/data.json', {"hello": "world"}, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        console.log('12345')
        
        alert(data);
    }

    

    // TELEGRAM BOT
//   const sda = 'asd'
//   import TelegramApi from 'node-telegram-bot-api';
//   const token ='6164426542:AAGyvlXrWyc9sg3duzx_MSTsqzjgmBZD2Cs';
//   const bot = new TelegramApi(token,{polling: true})
  
  
//   bot.on("message", async msg=> {
//       const text = msg.text;
//       const chatId = msg.chat.id;
//       if(text==='/start'){
//           await bot.sendMessage(chatId, 'Hello there!')
//       }
//       if(text==='/info'){
//           await bot.sendMessage(chatId, "Name: ")
//       }
//   })
  


// http.send();
// http.onload = function(){
//     if (this.readyState ==4 && this.status==200){
//         let data = JSON.parse(this.responseText);
//     }
// }

//     xhr.open("PUT", "data/data.json", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(data));
let dataBase=[]
        const addData=(ev)=>{
            // Записываем данные в local storage
            ev.preventDefault();
            let data = {
                username: document.getElementById('modal_username').value,
                phone: document.getElementById('modal_phone').value
            }
            dataBase.push(data);
            document.forms[0].reset();
            localStorage.setItem('Users', JSON.stringify(dataBase));
            // Превращаем данные в JS объекты
            console.log(JSON.parse(window.localStorage.getItem('Users')));
            const data_j = JSON.parse(window.localStorage.getItem('Users'));
            // fetch API. Тот же хуй в другой руке
            // fetch('https://reqres.in/api/users',{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data_j)
            // })
           
            // TEST
            // console.warn('added',{dataBase});
            // console.log(data);
            // console.log('SASAT')
        }
        const form = document.getElementById("form");
        form.addEventListener("submit", addData);
  