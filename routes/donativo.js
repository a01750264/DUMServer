const express = require('express');
const router = express.Router();
const donativoController = require('../controllers/donativo');

router.get('/verDonativos', donativoController.getVerDonativos);
router.post('/crearDonativo', donativoController.postCrearDonativo);
router.delete('/borrarDonativo', donativoController.deleteDonativo);

module.exports = router;