const express = require('express');
const router = express.Router();
const donanteController = require('../controllers/donante');
const checkAuth = require('../util/check-auth');

router.get('/verDonantes', donanteController.getDonantes);
router.get('/verInfoDonante', checkAuth, donanteController.getInfoDonante);
router.get('/verDonaciones', checkAuth, donanteController.getVerDonaciones)
router.post('/signUp', donanteController.postSignUp);
router.post('/logIn', donanteController.postLogIn);
router.post('/donar', checkAuth, donanteController.postDonar);
router.post('/donarDonativo', checkAuth, donanteController.postDonarDonativo);

module.exports = router;