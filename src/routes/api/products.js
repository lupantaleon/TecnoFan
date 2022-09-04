const express = require('express');

const ProductsAPIController = require('../../controllers/api/productsController');

const router = express.Router();


//Rutas
//Listado  productos
router.get('/', ProductsAPIController.list);
//Detalle de una producto
router.get('/:id', ProductsAPIController.detail);

module.exports = router;