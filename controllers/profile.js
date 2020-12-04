require('dotenv').config();
const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/', isLoggedIn, async (req, res) => {
    const user = await db.user.findOne({
        where: { name: req.user.name }
    })
    console.log(user);
    res.render('profile', { user });
  });


  // router.get('/', isLoggedIn, (req, res) => {
  //   const currentUser = res.locals.currentUser
  //   console.log(`Current User is ${currentUser.name}`);
  // })

module.exports = router;
