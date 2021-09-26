const express = require('express');
const router = express.Router();
const donanteController = require('../controllers/donante');

router.get('/verDonantes', donanteController.getDonantes);
router.post('/signUp', donanteController.postSignUp);
router.post('/logIn', donanteController.postLogIn);

module.exports = router;