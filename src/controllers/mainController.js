const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const auriculares = products.filter(product => product.category === 'monitores');
const monitores = products.filter(product => product.category === 'auriculares');
const mouses = products.filter(product => product.category === 'mouses');
const pcs = products.filter(product => product.category === 'PCs');
const audifonos = products.filter(product => product.category === 'audifonos');
const tablets = products.filter(product => product.category === 'tablets');
const smartwatches = products.filter(product => product.category === 'smartwatches');

const controller = {
    index: (req, res) => {
        res.render("index", {monitores, auriculares, mouses, pcs, audifonos, tablets, smartwatches});
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetail");
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
}

module.exports = controller;
