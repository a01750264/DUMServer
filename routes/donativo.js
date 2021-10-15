const express = require('express');
const router = express.Router();
const donativoController = require('../controllers/donativo');

router.post('/crearDonativo', donativoController.postCrearDonativo);

module.exports = router;