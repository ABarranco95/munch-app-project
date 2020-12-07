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
    //   where: {
    //       restaurant: restaurantId
    //   }
  })
  .then((favorites) => {
      res.render('favorites', { favorites })
  })
});


// router.get('/favorites', isLoggedIn, (req, res) => {
//   const currentUser = res.locals.currentUser
//   console.log(`Current User is ${currentUser.name}`);
//   // const alerts = res.locals.alerts

// })



router.post('/', (req, res) => {

    const restaurant = req.body.title;
    const address = req.body.address;
    const phone = req.body.phone;
    const restaurantId = req.body.restaurantId;

    db.favorites.findOrCreate({
      where : {
          restaurant, address, phone, restaurantId
      }
    }).then(([favorites, created]) => {
      db.user.findOne({
        where: {
          id: req.user.id
        }
      }).then(()=> {
          user.addFavorites(favorites)
        res.redirect('/favorites')
      })   
    }) 
    .catch((error) => {
        console.log(error);
        res.status(400)
    })   
  })

// router.post('/favorites', isLoggedIn, (req, res) => {
//   const restaurant = req.body.restaurant_name;
//   const address = req.body.address.formatted;
//   const phone = req.body.restaurant_phone;
//   const website = req.body.restaurant_website
//   db.favorites.findOrCreate({
//       where: {
//           restaurant, address, phone, website
//       }
//   })
//   .then(([favorite, created]) => {
//       db.user.findOne({
//           where: {
//               id: req.user.id
//           }
//       })
//       .then(user => {
//           user.addFavorite(favorite);
//       res.redirect('/favorites'); 
//       })
//   })
//   .catch((error) => {
//       console.log(error);
//       res.status(400);
//   })
// })

// router.put('/:id', isLoggedIn, function(req, res){
//     const id = req.body.id
//     const restaurant = req.body.restaurant;
//     const phone = req.body.phone;
//     const restaurantId = req.params.restaurantId;

//     db.favorites.update({
//         restaurant, phone
//         }, {
//         where: { id }
//     })
//     .then(() => {
//         res.redirect(`/favorites/${restaurantId}`);
//     })
//     .catch((error) => {
//         console.log(error);
//         res.status(400).render('main/404');
//     })
// });


// router.delete('/:id', isLoggedIn, (req, res) => {
//     const restaurantId = req.body.restaurantId;
//     const id = req.params.id;
//     db.favorites.destroy({
//         where: { id }
//     })
//     .then(() => {
//         res.redirect(`/favorites/${restaurantId}`);
//     })
//     // .catch((error) => {
//     //     console.log(error);
//     //     res.status(400).render('main/404');
//     // })
// });
// router.delete('/favorites', isLoggedIn, (req, res) => {
//     const recipeId = req.params.id;
//     db.favorites.destroy({
//         where: { restaurant: "Angel's Bar and Grill" }
//     })
//     .then(() => {
//         res.redirect('/favorites');
//     })
//     // .catch((error) => {
//     //     console.log(error);
//     //     res.status(400).render('main/404');
//     // })
// });


module.exports = router;