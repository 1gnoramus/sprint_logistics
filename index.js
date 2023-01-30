const TelegramApi = require('node-telegram-bot-api')
const token ='6164426542:AAGyvlXrWyc9sg3duzx_MSTsqzjgmBZD2Cs';
const bot = new TelegramApi(token,{polling: true})
const fs = require("fs");
bot.on("message", async (msg) => {
    fs.readFile("./data/data.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
      });
    const text = msg.text;
    const chatId = msg.chat.id;
    if(text==='/start'){
        await bot.sendMessage(chatId, 'Hello there!')
    }
    if(text==='/info'){
        await bot.sendMessage(chatId, "123: ")
    }
})
