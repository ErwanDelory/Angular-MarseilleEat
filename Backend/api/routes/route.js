const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurantController');

//router.post('/register', registerController.register);
//router.get('/eleves', userControllers.getEleves);
//router.get('/eleve/:id', userControllers.getEleveById);
router.get('/restaurant', restaurantController.getRestaurant);

module.exports = router;
