const crypto = require('crypto');

function Product (name = "", address, url_map, description, categoria) {
    this.id = crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.address = address.trim();
    this.url_map = url_map.trim() || null;
    this.mainImage = "img-pdto-1.jpg";
    this.images = [];
    this.categoria = categoria;
}

module.exports = Product