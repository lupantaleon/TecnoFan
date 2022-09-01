const path = require('path');
const { Op } = require("sequelize");
const moment = require('moment');
const db = require('../../database/models');

const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;

const ProductsAPIController = {
  'list': (req, res) => {
    Product.findAll({
      include: ['product_images']
    }).then(products => {
      let respuesta = {
        count: products.length,
        countByCategory: {},
        products: products.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          detail: '/api/products/' + product.id,
          images: product.product_images
        }))
      }
      res.json(respuesta);
    })
  },

  'detail': (req, res) => {
    db.User.findByPk(req.params.id, { attributes: { exclude: ["password"] } })
      .then(user => {
        let respuesta = {
          meta: {
            status: 200,
            total: user.length,
            url: '/api/users/' + user.id
          },
          data: user,
        }
        res.json(respuesta);
      });
  },
}



module.exports = ProductsAPIController;

