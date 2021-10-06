const express = require('express');
const router = express.Router();
const donanteController = require('../controllers/donante');
const checkAuth = require('../util/check-auth');

router.get('/verDonantes', donanteController.getDonantes);
router.get('/verInfoDonante', checkAuth, donanteController.getInfoDonante);
router.post('/signUp', donanteController.postSignUp);
router.post('/logIn', donanteController.postLogIn);

module.exports = router;