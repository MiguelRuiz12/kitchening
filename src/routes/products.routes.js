const express = require('express');
const { detail, add, edit, create } = require('../controllers/productsController');
const router = express.Router();

/* GET users listing. */
router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .post('/crear',create)
    .get('/editar/:id?', edit)

module.exports = router

