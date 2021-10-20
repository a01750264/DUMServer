const express = require('express');
const router = express.Router();
const checkAuth = require('../util/check-auth');
const propuestaController = require('../controllers/propuesta');

router.get('/verPropuestas', checkAuth, propuestaController.getPropuestas);
router.post('/crearPropuesta', checkAuth, propuestaController.postCrearPropuesta);

module.exports = router;