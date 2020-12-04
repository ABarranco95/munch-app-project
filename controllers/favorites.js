require('dotenv').config();
const express = require('express')
const router = express.Router();
const db = require('../models');
const isLoggedIn = require('../middleware/isLoggedIn');



// router.get('/', (req, res) => {
//     res.render('index')
// })

router.get('/', (req, res) => {
  db.favorites.findAll({
      where: {
          restaurant: "Angel's Bar and Grill"
      }
  })
  .then((favorites) => {
      res.render('favorites', { favorites })
  })
});


router.get('/', isLoggedIn, (req, res) => {
  const currentUser = res.locals.currentUser
  console.log(`Current User is ${currentUser.name}`);
  // const alerts = res.locals.alerts

})

module.exports = router;