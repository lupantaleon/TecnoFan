const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { get } = require('express/lib/response');


const usersController = require(path.resolve(__dirname,'../controllers/usersController'));

//Como podemos indicar para subir el archivo nombre y donde guardarlo

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'products-'+Date.now()+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage })

  router.get('/users',usersController.index);
  router.get('/users/create',usersController.create); 
  router.post('/users/create', upload.single('image') ,usersController.save); 
  router.get('/users/detail/:id', usersController.show);
  router.get('/users/edit/:id', usersController.edit);
  router.put('/users/edit/:id',upload.single('image') , usersController.update);
  router.get('/users/delete/:id', usersController.destroy);


module.exports = router;