const express = require('express');
const { index, cart, admin, searchAdmin } = require('../controllers/indexController')
const router = express.Router();

/* GET home page. */
router
.get('/',index)
.get('/carrito',cart)
.get('/admin',admin)
.get('/admin/productos/buscar', searchAdmin)

module.exports = router