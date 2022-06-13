const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); //

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		console.log(req.file);
		let image = 'default-image.png';
		if (req.file){
			image = req.file.filename;
		};
		const newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			category: parseInt(req.body.category),
			price: parseInt(req.body.price),
			discount: parseInt(req.body.discount),
			brand: parseInt(req.body.brand),
			image
		};
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;