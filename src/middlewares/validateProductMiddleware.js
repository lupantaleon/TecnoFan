const path = require('path');
const { body } = require('express-validator');

const validations = [
  body('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre del producto')
    .bail()
    .isLength({ min: 5 })
    .withMessage('El nombre no puede tener menos de 5 caracteres'),
  body('stock')
    .notEmpty()
    .withMessage('Debes asignar una cantidad al stock'),
  body('category')
    .notEmpty()
    .withMessage('Debes elegir una categoría'),
  body('price')
    .notEmpty()
    .withMessage('Debes asignar un valor al producto'),
  body('discount')
    .notEmpty()
    .withMessage('Debes asignar un valor al descuento'),
  body('brand')
    .notEmpty()
    .withMessage('Debes asignar una marca'),
  body('description')
    .notEmpty()
    .withMessage('Debes escribir una descripcion')
    .bail()
    .isLength({ min: 20 })
    .withMessage('La descripción no puede tener menos de 20 caracteres'),
  body('image')
    .custom((value, { req }) => {
      let file = req.file;
		  let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

    if (!file) {
    throw new Error('Debes subir una imagen');
      } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      return true;
    })
]

module.exports = validations