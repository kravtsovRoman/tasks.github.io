const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express();
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const cardRouter = require('./routes/card');
const coursesRouter = require('./routes/courses');
const User = require('./models/user');


// Handlebars
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(async (req, res, next) => {
  try {
    const user = await User.findById('5eaef232aa20b70cc8b800d4');
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
  }
})


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', homeRouter);
app.use('/add', addRouter);
app.use('/courses', coursesRouter);
app.use('/card', cardRouter);


// Run server
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const urlMongo = 'mongodb+srv://rozario:fVTzTII33H2vdRIB@cluster0-gueym.mongodb.net/shop';
    await mongoose.connect(
      urlMongo,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    const candidate = await User.findOne();
    if (!candidate) {
      const user = new User({
        email: 'rozario91208@gmail.com',
        name: 'Rozario',
        cart: { items: [] }
      });
      await user.save();
    }

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }

}

start();



