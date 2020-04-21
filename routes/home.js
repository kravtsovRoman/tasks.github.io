const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
  res.render('index', {
    title: "Главная старница",
    isHomePage: true
  })
});

module.exports = router;