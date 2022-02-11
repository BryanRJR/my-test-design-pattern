const express = require('express');
const app = express();
const PORT = 4000;
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(express.static('views/assets'));
app.set('view engine', 'ejs');
// build in middleware
app.use(express.static('public'));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.all('*', (req, res) => {
  res.send('404 Page Not Found');
});
// app.listen(PORT, () => {
//   console.log(`Run on port ${PORT}`);
// });

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});
