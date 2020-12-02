require('dotenv').config();
const express = require('express')
const router = express.Router();
const db = require('../models');
const API_KEY = process.env.API_KEY;
const axios = require('axios')

router.get('/', (req, res) => {
    res.send('We are on our favorites')
})

router.post('/', (req, res) => {
    
});


module.exports = router;