const express = require('express');
const router = express.Router();
const donanteController = require('../controllers/donante');

router.post('/signUp', donanteController.postSignUp);

module.exports = router;