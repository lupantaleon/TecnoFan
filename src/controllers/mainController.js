const controller = {
    index: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetail");
    },
    register: (req, res) => {
        res.render("register");
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
    productAdmin: (req, res) => {
        res.render("productAdmin")
    },
}

module.exports = controller;
