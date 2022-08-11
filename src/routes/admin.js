const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { get } = require('express/lib/response');
const authMiddleware = require('../middlewares/authMiddleware');

const productController = require(path.resolve(__dirname,'../controllers/productController'));

const productRouter = require('./product');

router.get('/', authMiddleware ,productController.index);
router.use('/product', authMiddleware ,productRouter);


module.exports = router;