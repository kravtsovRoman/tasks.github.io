const { Router } = require('express');
const Course = require('../models/course');
const router = Router();

// Все курсы
router.get('/', async (req, res) => {

  const courses = await Course.find()
    .populate('userId', 'email name')
    .select('price title img');

  res.render('courses', {
    title: "Курсы",
    isCoursesPage: true,
    courses
  })
});


// Редактирование курса
router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Course.findById(req.params.id);

  res.render('course-edit', {
    title: `Редактировать ${course.title}`,
    course
  })
})

// Сохранение редактирования курса
router.post('/edit', async (req, res) => {
  const { id } = req.body;
  delete req.body.id;

  await Course.findByIdAndUpdate(id, req.body);
  res.redirect('/courses');
});

router.post('/remove', async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.body.id });;
    res.redirect('/courses');
  } catch (e) {
    console.log(e);
  }
});


// Страница курса
router.get('/:id', async (req, res) => {

  const course = await Course.findById(req.params.id);

  res.render('course', {
    layout: 'empty',
    title: `Курс ${course.title}`,
    course
  });
})

module.exports = router;  