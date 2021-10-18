const express = require('express');
const router = express.Router();
const iniciativaController = require('../controllers/iniciativa');
const checkAuth = require('../util/check-auth');

router.get('/verIniciativas', iniciativaController.getVerIniciativas)
router.post('/crearIniciativa', checkAuth, iniciativaController.postCrearIniciativa)
router.delete('/borrarIniciativa', checkAuth, iniciativaController.deleteIniciativa)

module.exports = router;