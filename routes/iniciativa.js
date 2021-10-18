const express = require('express');
const router = express.Router();
const iniciativaController = require('../controllers/iniciativa');

router.get('/verIniciativas', iniciativaController.getVerIniciativas)
router.post('/crearIniciativa', iniciativaController.postCrearIniciativa)
router.delete('/borrarIniciativa', iniciativaController.deleteIniciativa)

module.exports = router;