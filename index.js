const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const app = express();

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.get('/', (req, res) => {
  res.render('index');

});

app.get('/about', (req, res) => {
  res.render('about')

});






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
}); 