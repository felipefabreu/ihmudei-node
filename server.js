const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: "React",
        description: "Build apps with react",
        url: "http://github.com/facebook/react",
    });
    
    return res.send("Hello Felipe");
 });

app.listen(3001);