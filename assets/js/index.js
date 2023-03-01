/*global chrome*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var jsonParser = bodyParser.json()


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('assets'));
app.use('/css', express.static(__dirname + 'assets/css'))
app.use('/images', express.static(__dirname + 'assets/images'))
app.use('/js', express.static(__dirname + 'js'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/services_lcl', (req, res) => {
  res.sendFile(__dirname + '/services_lcl.html');
});
app.get('/services_avia', (req, res) => {
  res.sendFile(__dirname + '/services_avia.html');
});
app.get('/services_ftl', (req, res) => {
  res.sendFile(__dirname + '/services_ftl.html');
});
app.get('/services_eur', (req, res) => {
  res.sendFile(__dirname + '/services_eur.html');
});
app.get('/services_railways', (req, res) => {
  res.sendFile(__dirname + '/services_railways.html');
});
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/geography', (req, res) => {
  res.sendFile(__dirname + '/geography.html');
});



app.post('/submit-data', (req, res) => {  // Get the data from the form
  const data = req.body;

  let buffFileData = fs.readFileSync('data.json').toJSON().data;
  jsonFileData = Buffer.from(buffFileData).toString()
  console.log('Data');
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
