const express = require('express');
const { detail, add, edit } = require('../controllers/productController');
const router = express.Router();

/* GET users listing. */
router
    .get('/detalle/:id?', detail)
    .get('/agregar', add)
    .get('/editar/:id?', edit)

module.exports = router

