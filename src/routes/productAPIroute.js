const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');
const ProducsAPIController = require('../controllers/Api/productApiController');

//Rutas
//Listado  producto
router.get('/', ProducsAPIController.list);
//Detalle de una producto
router.get('/:id', ProducsAPIController.detail);
//Agregar  producto
router.post('/create', ProducsAPIController.create);
//Modificar  producto
router.put('/update/:id', ProducsAPIController.update);
//Eliminar  producto
router.delete('/delete/:id', ProducsAPIController.destroy);

module.exports = router;