const express = require('express');
const router = express.Router();
const iniciativaController = require('../controllers/iniciativa');

router.post('/crearIniciativa', iniciativaController.postCrearIniciativa)

module.exports = router;