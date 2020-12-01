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