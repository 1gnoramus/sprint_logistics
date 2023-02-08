const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.sendFile(__dirname +'Projects/Sprint/services_lcl.html');
  });


app.post('/submit-data', (req, res) => {
  // Get the data from the form
  const data = req.body.data;
  console.log(data)

  // Read the existing JSON file
  let jsonData = JSON.parse(fs.readFileSync('data.json'));

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