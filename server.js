const mongoose = require('mongoose');
const requireDir = require('require-dir');
const express = require('express');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');



//Rotas
app.use("/api", require("./src/routes"));


app.listen(3001);