const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const Categories = db.Category
const Products = db.Product

const categoriesAPIController = {
    'list': (req, res) => {
        db.Category.findAll()
        .then(categories => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: categories.length,
                    url: 'api/categories'
                },
                data: categories
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Category.findByPk(req.params.id)
        .then(category => {
            if ( category != null ){
            let respuesta = {
                meta: {
                    status: 200,
                    total: category.length,
                    url: '/api/category/:id/'
                },
                data: category
            }
            res.json(respuesta);}
            else {
                let respuesta = {
                    meta: {
                        status: 404,
                        total: 0
                    }}
                res.json(respuesta);
            }
        });
    },
    'categoryProducts': (req, res) => {
        db.Category.findByPk(req.params.id,{
            include: ['products']
        })
            .then(category => {
                if (category != null){
                let respuesta = {
                    meta: {
                        status: 200,
                        total: category.length,
                        url: '/api/category/:id/products'
                    },
                    data: category
                }
                res.json(respuesta);}
                else {
                    let respuesta = {
                        meta: {
                            status: 404,
                            total: 0
                        }}
                    res.json(respuesta);
                }
            });
    }
}

module.exports = categoriesAPIController;