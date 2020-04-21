const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
  res.render('add', {
    title: "Добавить курс",
    isAddPage: true
  })
});


router.post('/', (req, res) => {
  console.log(req.body);
})

module.exports = router;