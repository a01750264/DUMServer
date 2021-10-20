const express = require('express');
const router = express.Router();
const donativoController = require('../controllers/donativo');
const checkAuth = require('../util/check-auth');

router.get('/verDonativos', donativoController.getVerDonativos);
router.get('/verDonativo', donativoController.getDonativo)
router.post('/crearDonativo', checkAuth, donativoController.postCrearDonativo);
router.delete('/borrarDonativo', checkAuth, donativoController.deleteDonativo);

module.exports = router;