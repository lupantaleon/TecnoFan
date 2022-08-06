const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { get } = require('express/lib/response');

const productController = require(path.resolve(__dirname,'../controllers/productController'));

const productRouter = require('./product');

router.get('/',productController.index);
router.use('/product',productRouter);


module.exports = router;