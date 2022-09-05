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
  getByCategory: async (req, res) => {
    let category = await db.Category.findOne({
      where: {
        id: req.params.id
      }
    })
    if ( category != null ){
    let products = await db.Product.findAll({
      where: {
        category_id: req.params.id
      },
      include: ['product_images']
    })
    res.render('productsByCategory', {
      category,
      products
    })}
    else {
      res.status(404).render('not-found')
    }
  },
  detailById: function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: ['product_images']
    })
      .then(function (product) {
        if ( product != null ){
        res.render('productDetailById', {
          product
        })}
        else {
          res.status(404).render('not-found')
        }
      })
  },
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
  edit: async function (req, res) {
    const products = await db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: ['product_images']
    })
    const categories = await db.Category.findAll()
    res.render('admin/edit', {
      products,
      categories
    })
  },
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
  destroy: function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/administrar");

  },
}