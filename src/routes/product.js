const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');
const validateProdMiddleware = require('../middlewares/validateProductMiddleware');



const productController = require(path.resolve(__dirname, '../controllers/productController'));

//Como podemos indicar para subir el archivo nombre y donde guardarlo

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/img'));
  },
  filename: function (req, file, cb) {
    cb(null, 'products-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })


router.get('/create', authMiddleware, productController.create);
router.post('/create', upload.single('image'), validateProdMiddleware, productController.save);
// lectura
/* router.get('//deail', controllersAdmin.detail) */

router.get('/detail/:id', authMiddleware, productController.detail);
router.get('/edit/:id', authMiddleware, productController.edit);
/* router.put('/update/:id', productController.update); */
router.put('/edit/:id', upload.single('image'), productController.update);
router.delete('/delete/:id', authMiddleware, productController.destroy);



module.exports = router;