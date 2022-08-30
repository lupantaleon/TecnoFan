const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { productCart } = require('../mainController');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;
const Products = db.Products;

const ProductsAPIController = {
  'list': (req, res) => {
    const categories = db.Category.findAll({
      attributes: {
        include: [sequelize.fn('COUNT', sequelize.col('products')), 'productsCount']
      }
    });

    db.Products.findAll({
      include: ['product_images']
    }).then(products => {
      let respuesta = {
        count: products.length,
        countByCategory: [],
        products: products.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          detail: "",
          images: product.images.map(image => ({
            id: image.id,
            name: image.name
          }))
        }))
      }
      res.json(respuesta);
    })
  },

  'detail': (req, res) => {
    db.Products.findByPk(req.params.id,
      {
        // include: ['category']
      })
      .then(product => {
        let respuesta = {
          meta: {
            status: 200,
            // una propiedad por cada campo de base 
            id: Product.id,
            name: product.name,
            description: product.description,
            total: data.length,
            url: '/api/products/:id'
          },
          data: Products
        }
        res.json(respuesta);
      });
  },
  /*create: (req, res) => {
    Products
      .create(
        {
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          length: req.body.length,
          genre_id: req.body.genre_id
        }
      )
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/create'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/create'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  },
  update: (req, res) => {
    let movieId = req.params.id;
    Movies.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id
      },
      {
        where: { id: movieId }
      })
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/update/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/movies/update/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  },
  destroy: (req, res) => {
    let movieId = req.params.id;
    Movies
      .destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/destroy/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/movies/destroy/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  }*/

}

module.exports = ProducsAPIController;