"use strict"

let express = require('express');
let bodyParser = require("body-parser")

let app = express();

//Preparacion para que tengan maximo de tamaño del paquete
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}))
app.use(bodyParser.json({limit:"50mb",extended:true}))

module.exports = app