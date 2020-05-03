const { Router } = require('express');
const Course = require('../models/course');
const router = Router();


router.post('/add', async (req, res) => {
  const course = await Course.findById(req.body.id);
  await req.user.addToCart(course);
  res.redirect('/card');

});

router.delete('/remove/:id', async (req, res) => {
  const card = await Card.remove(req.params.id);
  res.status(200).json(card);
});


router.get('/', async (req, res) => {
  // const card = await Card.fetch();

  // res.render('card', {
  //   title: 'Корзина',
  //   isCard: true,
  //   courses: card.courses,
  //   price: card.price
  // });

  res.json({ test: true })

});

module.exports = router;