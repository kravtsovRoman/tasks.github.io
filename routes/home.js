const { Router } = require('express');
const router = Router();


router.get('/add', (req, res) => {
  res.render('add', {
    title: "Добавить курс",
    isAddPage: true
  })
});

module.exports = router;