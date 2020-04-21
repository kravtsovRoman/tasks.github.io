const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const app = express();
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const coursesRouter = require('./routes/courses');

const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// Public dir
app.use(express.static('public'));

// Routes
app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/courses', coursesRouter);

app.get('/', (req, res) => {
  res.render('index', {
    title: "Главная страница",
    isHomePage: true
  });
});










const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
}); 