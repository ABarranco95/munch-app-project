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

// db.favorites.findOrCreate({
//     where: { restaurant: "Angel's Bar and Grill"},
//     defaults: {
//         address: '26658 W Cleveland',
//         phone: '(559)999-9999',
//     }
// }).then(([favorites, created]) => {
//     console.log(created)
//     console.log(favorites);
// })