const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const app = express();
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const cardRouter = require('./routes/card');
const coursesRouter = require('./routes/courses');


// Handlebars
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/courses', coursesRouter);
app.use('/card', cardRouter);


// Run server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
}); 