/* const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users/.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */
/* const User = require('../src/models/User') */
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");

const controller = {
  index: (req, res) => {
    db.User.findAll().then((users) => {
      res.render(path.resolve(__dirname, '../views/users/administrar'), { users })
    });
  },
  register: (req, res) => {

    return res.render('register');
  },
  processRegister: async (req, res) => {
    try {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render('register', {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }

      let userInDB = await db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      /* await db.User.findByField('email', req.body.email); */

      if (userInDB) {
        return res.render('register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body
        });
      }

      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file.filename,
        role_id: "2"
      }

      let userCreated = await db.User.create(userToCreate)

      return res.redirect('/users/login');
    } catch (error) {
      console.log(error)
    }

  },
  login: (req, res) => {

    return res.render('login');
  },
  loginProcess: async (req, res) => {
    try {

      let userToLogin = await db.User.findOne({
        where: {
          email: req.body.email
        }
      })

      const resultValidationLogin = validationResult(req);
      if (resultValidationLogin.errors.length > 0) {
        return res.render('login', {
          errors: resultValidationLogin.mapped(),
          oldData: req.body
        });
      }

      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;

          if (req.body.remember) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })


          }

          return res.redirect('/users/profile');
        }
        return res.render('login', {
          errors: {
            email: {
              msg: 'Las credenciales son inválidas'
            }
          }
        });
      }

      return res.render('login', {
        errors: {
          email: {
            msg: 'No se encuentra este email en nuestra base de datos'
          }
        }
      });
    } catch (error) {
      console.log(error)
    }
  },
  profile: (req, res) => {

    return res.render('userProfile', {
      user: req.session.userLogged
    });
  },
  destroy: async (req, res) => {
    await db.User.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.redirect('/users/administrar');
  },
  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  },



}

module.exports = controller;