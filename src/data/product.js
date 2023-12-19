const crypto = require('crypto');

function Product (name = "", address, url_map, description, categoria) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.address = address;
    this.url_map = url_map || null;
    this.mainImage = "img-pdto-1.jpg";
    this.images = [];
    this.categoria = categoria;
}

module.exports = Product