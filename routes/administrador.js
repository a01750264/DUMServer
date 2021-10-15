const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administrador');

router.post('/signUp', administradorController.postSignUp);
router.post('/logIn', administradorController.postLogIn);

module.exports = router;