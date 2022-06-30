const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { get } = require('express/lib/response');


const usersController = require(path.resolve(__dirname,'../controllers/usersController'));



  router.get('/users',usersController.index);
  router.get('/users/create',usersController.create); 
  router.post('/users/create', usersController.save); 
  router.get('/users/detail/:id', usersController.show);
  router.get('/users/edit/:id', usersController.edit);
  router.put('/users/edit/:id', usersController.update);
  router.get('/users/delete/:id', usersController.destroy);


module.exports = router;