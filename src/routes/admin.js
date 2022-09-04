const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { get } = require('express/lib/response');
const authMiddleware = require('../middlewares/authMiddleware');
const validateProdMiddleware = require('../middlewares/validateProductMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const productController = require(path.resolve(__dirname,'../controllers/productController'));

const productRouter = require('./product');

router.get('/', [authMiddleware , roleMiddleware], productController.index);
router.use('/product', [authMiddleware , roleMiddleware],productRouter);


module.exports = router;