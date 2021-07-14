const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('done');
});

app.listen(3000, () => {
  console.log('server started')
});
