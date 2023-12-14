const express = require('express');
const { index, cart, admin } = require('../controllers/indexController')
const router = express.Router();

/* GET home page. */
router
.get('/',index)
.get('/carrito',cart)
.get('/admin',admin)

module.exports = router