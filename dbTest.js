require('dotenv').config();
const db = require('./models')
const axios = require('axios')
const API_KEY = process.env.API_KEY;

// user model is working
// db.user.findOrCreate({
//     where: { 
//         name: 'James',
//         email: 'Jamesbarranco@gmail.com',
//         password: 'Munchpassword123',

//     }  
// });


// async function test() {
//     const user = await db.user.findOne()
//     const profile = await db.profile.create({
//         content: 'All this content is available for you to see',
//         userId: user.id,
//         title: 'We would be honored if you joined us'
//     })
//     console.log(profile);
// }
// test();




const url = `https://api.documenu.com/v2/restaurants/zip_code/93638?key=${API_KEY}`;
axios.get(url)
.then(response => {
    if (response.status === 200) {
        // console.log(response.data);
        let len = response.data.length;
        for (let i = 0; i < len; i++) {
            let searchResultObject = response.data[i];
            const searchRestObject = {
                restaurantName: searchResultObject.restaurant_name,
                address: searchResultObject.address,
                phone: searchResultObject.restaurant_phone

            };
            console.log(searchRestObject);
            // db.favorite.findOrCreate({
            //     where: { foodId: searchRestObject.foodId },
            //     defaults: {
            //         restaurantName: searchRestObject.restaurant_name,
            //         address: searchRestObject.address.formatted,
            //         phone: searchRestObject.phone,
            //     }
            // }).then(([favorite, created]) => {
            //     console.log(created);
            // })
        }
    }
})
.catch(err => {
    console.log(err);
});