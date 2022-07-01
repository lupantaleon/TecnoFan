const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const auriculares = products.filter(product => product.category === 'monitores');
const monitores = products.filter(product => product.category === 'auriculares');
const mouses = products.filter(product => product.category === 'mouses');
const pcs = products.filter(product => product.category === 'PCs');
const audifonos = products.filter(product => product.category === 'audifonos');
const tablets = products.filter(product => product.category === 'tablets');
const smartwatches = products.filter(product => product.category === 'smartwatches');

/* value="auriculares">
value="monitores">Mo
value="mouses">Mouse
value="PCs">PCs</opt
value="audifonos">Au
value="tablets">Tabl
value="smartwatches" */

const controller = {
    index: (req, res) => {
        res.render("index", {monitores, auriculares, mouses, pcs, audifonos, tablets, smartwatches});
    },
    /* login: session */
    login: (req, res) => {
        res.render("login");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetail");
    },
    // formulario de registro
     register: (req,res) => {
        return res.render('Register');
    },
    // processRegister
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render('Register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        return res.send('Ok, las validaciones están de forma correcta y no tienes errores')

    },
    smartwatchs: (req, res) => {
        res.render("smartwatchs");
    },
    mouses: (req, res) => {
        res.render("mouses");
    },
    smartphones: (req, res) => {
        res.render("smartphones");
    },
    auriculares: (req, res) => {
        res.render("auriculares");
    },
    tablets: (req, res) => {
        res.render("tablets");
    },
    pcs: (req, res) => {
        res.render("pcs");
    },
    monitores: (req, res) => {
        res.render("monitores");
    },
    audifonos: (req, res) => {
        res.render("audifonos");
    },
    quienessomos: (req, res) => {
        res.render("quienessomos");
    },
    /* productAdmin: (req, res) => {
        res.render("productAdmin")
    }, */
    /* login:session */
}

module.exports = controller;
