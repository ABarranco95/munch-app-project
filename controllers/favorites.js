require('dotenv').config();
const express = require('express')
const router = express.Router();
const db = require('../models');
const API_KEY = process.env.API_KEY;
const axios = require('axios')


// router.get('/', (req, res) => {
//     res.render('index')
// })

router.get('/', (req, res) => {
  db.favorites.findAll({
    //   where: {
    //       restaurant: "Angel's Bar and Grill"
    //   }
  })
  .then((favorites) => {
      res.render('favorites', { favorites })
  })
});

// router.post('/', (req, res) => {
    
// });


module.exports = router;