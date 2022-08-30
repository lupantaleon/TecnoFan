const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const { validationResult } = require('express-validator');


const Products = db.Product

module.exports = {
  create: (req, res) => {
    db.Category.findAll()
      .then(function (categories) {
        return res.render("admin/create", {
          categories
        })
      })
  },

  save: async (req, res) => {

    try {
      const categories = await db.Category.findAll()

      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render('admin/create', {
          errors: resultValidation.mapped(),
          categories,
          oldData: req.body
        });
      }

      const productCreated = await db.Product.create({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        discount: req.body.discount,
        description: req.body.description,
        stock: req.body.stock,
        category_id: req.body.category,
      });
      const images = [{
        name: req.file.filename,
        product_id: productCreated.id
      }]
      await db.Product_image.bulkCreate(images)
      res.redirect('/administrar')

    } catch (error) {
      console.log(error)
    }
  },

  index: async (req, res) => {
    let products = await db.Product.findAll()
    res.render('admin/administrar', {
      products
    });
  },
  /* create: (req,res) =>{
      let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
      res.render(path.resolve(__dirname, '../views/admin/create'), {products});
  }, */
  /* save: (req,res) => {
      let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
      let ultimoProducto = products.pop();
      products.push(ultimoProducto);
      let nuevoProducto = {
          id: ultimoProducto.id +1,
          name : req.body.name,
          price: req.body.price,
          discount: req.body.discount,
          category: req.body.category,
          description: req.body.description,
          brand: req.body.brand, 
          image: req.file.filename,
      }
      products.push(nuevoProducto);
      let nuevoProductoGuardar = JSON.stringify(products,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../data/products.json'), nuevoProductoGuardar);
      res.redirect('/administrar');
  } */
  detail: function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: ['product_images']
    })
      .then(function (product) {
        res.render('admin/detail', {
          product
        })
      })
  },
  /* edit : function(req, res){
      db.Product.findByPk(req.params.id, {
          include : [{association : "categories"},{association: "invoice_detail"}, {association : "product_images"}, {association: "product_financing"},{association: "
          "}]
      })
      .then(function(products){
          res.render('admin/edit', {products})    
      })
  }, */

  /*  edit : function(req, res){
       let pedidoProduct = db.Pelicula.findByPk(req.params.id);
       let pedidoCategories = db.Pelicula.findAll();
       Promise.all([pedidoPelicula, pedidoCategories])
           .then(function([product,categories]){
               res.render('admin/edit', {product:product,categories:categories})
           })
   },  */
  edit: async function (req, res) {
    const products = await db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
    const categories = await db.Category.findAll()
    res.render('admin/edit', {
      products,
      categories
    })
  },
  /* edit: function(req,res) {
      let productId = req.params.id;
      let promProducts = Products.findByPk(productId);
      Promise
      .all(promProducts)
      .then(([Product]) => {
      return res.render("admin/edit")})
      .catch(error => res.send(error))}, */
  /* update: function (req,res) {
      db.Product.update(
          {
              name : req.body.name,
              brand: req.body.brand, 
              price: req.body.price,
              discount: req.body.discount,
              description: req.body.description,
              stock: req.body.stock,
              category_id: req.body.category,
          },
          {
              where: req.params.id
          })
      .then(()=> {
          return res.redirect('/administrar')})            
      .catch(error => res.send(error))
  }, */
  update: async (req, res) => {
    try {
      const productUpdated = await db.Product.update({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        discount: req.body.discount,
        description: req.body.description,
        stock: req.body.stock,
        category_id: req.body.category,
      }, {
        where: { id: req.params.id }
      });
      const images = [{
        name: req.file.filename,
        product_id: req.params.id
      }]
      await db.Product_image.bulkCreate(images)
      res.redirect('/administrar')
    } catch (error) {
      console.log(error)
    }
  },

  /* show: (req,res) =>{
      let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
      let miProduct;
      products.forEach(product => {
          if(product.id == req.params.id){
              miProduct = product;
          }
      });
      res.render(path.resolve(__dirname, '../views/admin/detail'), {miProduct})
  },
  edit: (req,res)=>{
      let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
      const productId = req.params.id;
      let productEditar = products.find(product=> product.id == productId);
      res.render(path.resolve(__dirname,'../views/admin/edit'), {productEditar});
  },  
  update: (req,res) =>{
      let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
      req.body.id = req.params.id;
      req.body.image = req.file ? req.file.filename : req.body.oldImage;
      let productsUpdate = products.map(product =>{
          if(product.id == req.body.id){
              return product = req.body;
          }
          return product;
      })
      let productActualizar = JSON.stringify(productsUpdate,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../data/products.json'),productActualizar)
      res.redirect('/administrar');
},
destroy: (req,res) =>{
  let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
  const productDeleteId = req.params.id;
  const productsFinal = products.filter(product => product.id != productDeleteId);
  let productsGuardar = JSON.stringify(productsFinal,null,2)
  fs.writeFileSync(path.resolve(__dirname, '../data/products.json'),productsGuardar);
  res.redirect('/administrar');
}, */
  destroy: function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/administrar");

  },
}