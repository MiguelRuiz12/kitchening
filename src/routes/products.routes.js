const express = require('express');
const { detail, add } = require('../controllers/productController');
const router = express.Router();

/* GET users listing. */
router
    .get('/detalle/:id?', detail)
    .get('/agregar',add)

module.exports = router

