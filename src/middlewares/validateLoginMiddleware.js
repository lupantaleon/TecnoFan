const path = require('path');
const { body } = require('express-validator');

const validationsLogin = [
  body('email')
    .notEmpty()
    .withMessage('Tienes que ingresar un E-mail')
    .bail()
    .isEmail()
    .withMessage('Debes escribir un formato de correo válido'),
  body('password')
    .notEmpty()
    .withMessage('Tienes que ingresar una contraseña'),
]

module.exports = validationsLogin