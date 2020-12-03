
const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {
    res.render('restaurants/results');
});


router.get('/results', (req, res) => {
    const search = req.query.search;
    console.log(search)
    axios.get(`https://api.documenu.com/v2/restaurants/zip_code/${search}?key=${API_KEY}`)
    .then(response => {
        if (response.status === 200) {
            // console.log(response.data.data);
            let len = response.data.data.length;
            for (let i = 0; i < len; i++) {
                let searchResultObject = response.data.data[i];
                // console.log(searchResultObject);
                const searchRestObject = {
                    restaurant_id: searchResultObject.restaurant_id,
                    restaurantName: searchResultObject.restaurant_name,
                    address: searchResultObject.address.formatted,
                    phone: searchResultObject.restaurant_phone
    
                };
                console.log(searchRestObject);
                // db.favorites.findOrCreate({
                //     where: { restaurant: searchRestObject.restaurant },
                //     defaults: {
                //         restaurant: searchRestObject.restaurant_name,
                //         address: searchRestObject.address.formatted,
                //         phone: searchRestObject.phone,
                //     }
                // }).then(([favorites, created]) => {
                //     console.log(created);
                //     res.render()
                // })
            }
        }
    })
    .catch(err => {
        console.log(err);
    });
});

    module.exports = require;