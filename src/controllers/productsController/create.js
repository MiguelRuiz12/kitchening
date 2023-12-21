const { leerJSON, escribirJSON } = require("../../data");
const Product = require("../../data/product");

module.exports = (req,res) => {
    const {name,address,url_map,description,categoria} = req.body;

    const newProduct = new Product(name,address,url_map,description,categoria)
    const products = leerJSON('products')

    products.push(newProduct)

    escribirJSON(products, 'products')

    return res.redirect('/admin')
}