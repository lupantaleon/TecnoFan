// Acá nos falta express y el router
const express = require("express");
const req = require("express/lib/request");

const router = express.Router();
const multer = require('multer');
const path  = require('path');

const {body} = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/img/avatars')
},
    filename: (req, file,cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
         cb(null, fileName);
    }
})

const uploadFile = multer({storage});

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre y apellido'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un E-mail').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('address').notEmpty().withMessage('Tienes que escribir una dirección'),
    body('telefono').notEmpty().withMessage('Tienes que escribir un teléfono'),
    body('country').notEmpty().withMessage('Tienes que elegir un país'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
        

        if(!file){
            throw new error('Tienes que subir una imagen')
        } else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new error(`Las extensiones de archivos permitidos son ${acceptedExtensions.join(',')}`)
            }
        }
        return true;
    })
]

// Aća nos falta traer el controller
const mainController = require("../controllers/mainController");
const { fileName } = require("../models/User");
const { error } = require("console");
const { accepts } = require("express/lib/request");
// Acá definimos las rutas
router.get("/", mainController.index);
// gormulario de login
router.get("/login", mainController.login);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);
// formulario de registro 
router.get("/register", mainController.register);
// procesar el registro 
router.post("/register",uploadFile.single('avatar'),validations, mainController.processRegister);

router.get("/smartwatchs", mainController.smartwatchs);
router.get("/mouses", mainController.mouses);
router.get("/smartphones", mainController.smartphones);
router.get("/auriculares", mainController.auriculares);
router.get("/tablets", mainController.tablets);
router.get("/pcs", mainController.pcs);
router.get("/monitores", mainController.monitores);
router.get("/audifonos", mainController.audifonos);
router.get("/quienessomos", mainController.quienessomos);
/* router.get("/admin", productsController.index); */


// Acá exportamos el resultado
module.exports = router;
