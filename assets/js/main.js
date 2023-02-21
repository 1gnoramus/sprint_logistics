    function take_value(){
        // ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНПУТА С ЗАПРОСА ЗВОНКА
        var username = document.getElementById('username').value;
        var phone = document.getElementById('phone').value;
        document.write(username);
        document.write(phone);
    }

    // // ОТПРАВИТЬ ЗАПРОС И ЗАКРЫТЬ ФОРМУ ПРИКОЛ
    // document.getElementById('send_request_button').addEventListener('click', 
    // function(){
    // document.querySelector('.bg-modal').style.display='none'});

    // // ОТКРЫТЬ ФОРМУ ЗАПРОСА ЗВОНКА
    // document.getElementById('button').addEventListener('click', 
    // function(){
    //     document.querySelector('.bg-modal').style.display='flex';
    // });

    // // ОТКРЫТЬ ФОРМУ ЗАПРОСА ЗВОНКА ПРИКОЛ
    // document.getElementById('button2').addEventListener('click', 
    // function(){
    //     scrollToTop();
    //     document.querySelector('.bg-modal').style.display='flex';
    // });

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
        }
        const form = document.getElementById("form");
        form.addEventListener("submit", addData);

      
// chrome.runtime.onConnect.addListener(port => {
//     port.onMessage.addListener(msg => {
//       // Handle message however you want
//     });
//   });
  
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => sendResponse('pong'));
// var _port;


// function testConnect() {
//   _port.postMessage({
//     msg: 'hello from popup'
//   });
// }

// chrome.runtime.onConnect.addListener(function (port) {
//   console.log('connected to: ', port.name);
//   _port = port;

//   _port.onMessage.addListener(processMessages);
//   p_portrt.postMessage({
//     msg: 'hello from popup'
//   });
// });

