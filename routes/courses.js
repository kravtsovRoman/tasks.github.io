const { Router } = require('express');
const Course = require('../models/course');
const router = Router();


router.get('/', async (req, res) => {

  const courses = await Course.getAll();

  // Все курсы
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

  const course = await Course.getById(req.params.id);

  res.render('course-edit', {
    title: `Редактировать ${course.title}`,
    course
  })
})

// Сохранение редактирования курса
router.post('/edit', async (req, res) => {
  await Course.update(req.body);
  res.redirect('/courses');
})


// Страница курса
router.get('/:id', async (req, res) => {

  const course = await Course.getById(req.params.id);

  res.render('course', {
    layout: 'empty',
    title: `Курс ${course.title}`,
    course
  });
})

module.exports = router;