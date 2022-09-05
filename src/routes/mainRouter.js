// Acá nos falta express y el router
const express = require("express");
const req = require("express/lib/request");

const router = express.Router();
const multer = require('multer');
const path = require('path');
const validations = require('../middlewares/validateRegisterMiddleware')

/* const {body} = require('express-validator'); */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/avatars')
  },
  filename: (req, file, cb) => {
    let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
})

const uploadFile = multer({ storage });

// Aća nos falta traer el controller
const mainController = require("../controllers/mainController");
const productController = require("../controllers/productController");


// Acá definimos las rutas
router.get("/", mainController.index);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);

router.get("/quienessomos", mainController.quienessomos);
router.get("/ayuda", mainController.ayuda);
router.get("/novedades", mainController.novedades);

router.get("/category/:id", productController.getByCategory);
router.get("/product/:id", productController.detailById);

// Acá exportamos el resultado
module.exports = router;
