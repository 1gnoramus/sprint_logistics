// const TelegramApi = require('node-telegram-bot-api')
// const token ='6164426542:AAGyvlXrWyc9sg3duzx_MSTsqzjgmBZD2Cs';
// const bot = new TelegramApi(token,{polling: true})
// const axios = require('axios');
// const fs = require("fs");
// const apiUrl = `https://api.telegram.org/bot${token}/sendDocument`;


// bot.on("message", async (msg) => {
//     fs.readFile("./data/data.json", "utf8", (err, jsonString) => {
//         if (err) {
//           console.log("File read failed:", err);
//           return;
//         }
//         console.log("File data:", jsonString);
//       });
//     const text = msg.text;
//     const chatId = msg.chat.id;
//     if(text==='/start'){
//         await bot.sendMessage(chatId, 'Hello there!')
//     }
//     if(text==='/info'){
//         await bot.sendMessage(chatId, "123: ")
//     }
// })

// async function sendFileToTelegram(filePath) {
//   const formData = new FormData();
//   formData.append('document', fs.createReadStream('./data/data.json'), {
//     filename: 'data.json',
//     contentType: 'application/json'
//   });

//   try {
//     const response = await axios.post(apiUrl, formData, {
//       headers: formData.getHeaders()
//     });

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// sendFileToTelegram('data/data.json');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var jsonParser = bodyParser.json()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/services_lcl.html');
  });


app.post('/submit-data', (req, res) => {
  // Get the data from the form
  const data = req.body;

  let jsonFileData = fs.readFileSync('data.json').toJSON();
  console.log(jsonFileData)
  // Read the existing JSON file
  let jsonData = JSON.parse(jsonFileData);

  // Add the new data to the JSON object
  jsonData.push(data);

  // Write the updated JSON object to the file
  fs.writeFileSync('data.json', JSON.stringify(jsonData));

  // Send a success message to the client
  res.send('Data submitted successfully');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });