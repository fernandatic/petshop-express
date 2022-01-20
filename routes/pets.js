/*SISTEMA DE ROTEAMENTO*/
const express = require('express'); /*EXTRUTURA BASICA DE ROTAS*/
const petsController = require('../controllers/petsController');
const router = express.Router(); /*EXTRUTURA BASICA DE ROTAS*/

/*router.get('/', function(req, res){
res.render('pets');
});*/

/*ACESSANDO PETSCONTROLLER NO CONTROLLERS*/
router.get('/', petsController.buscarPets);

module.exports = router; /*EXTRUTURA BASICA DE ROTAS*/