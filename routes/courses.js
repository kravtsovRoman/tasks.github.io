const { Router } = require('express');
const Course = require('../models/course');
const router = Router();


router.get('/', async (req, res) => {

  const courses = await Course.getAll();

  res.render('courses', {
    title: "Курсы",
    isCoursesPage: true,
    courses
  })
});


router.get('/:id', async (req, res) => {

  const course = await Course.getById(req.params.id);

  res.render('course', {
    title: `Курс ${course.title}`,
    course
  });
})

module.exports = router;