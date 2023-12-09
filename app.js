const express = require('express');
const app = express();
const path = require('path')
const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/carrito', (req,res) => res.sendFile(path.join(__dirname,'views','carrito.html')))
app.get('/detalle', (req,res) => res.sendFile(path.join(__dirname,'views','detalle.html')))
app.get('/registro', (req,res) => res.sendFile(path.join(__dirname,'views','registro.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')))


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))