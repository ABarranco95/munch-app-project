require('dotenv').config();
const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/', isLoggedIn, async (req, res) => {
    const user = await db.user.findOne({
        where: { id: req.user.id }
    })
    res.render('profile', { user });
  });



module.exports = router;