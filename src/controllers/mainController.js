const fs = require('fs');
const path = require('path');
const db = require("../database/models");
const { validationResult } = require('express-validator');



const controller = {
    index: async (req, res) => {
        let categories = await db.Category.findAll()
        res.render('index', {
          categories
        });
      },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetail");
    },
    quienessomos: (req, res) => {
        res.render("quienessomos");
    },
    ayuda: (req, res) => {
        res.render("ayuda");
    },
    novedades: (req, res) => {
        res.render("novedades");
    },
}

module.exports = controller;
