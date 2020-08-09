"use strict"

let mongoose = require("mongoose");
let app = require("./app.js");
let port = process.env.PORT || 4300;
let logger = require("morgan");
let users = require("./routes/users.route.js");
let cors = require('cors');

let WebSocket = require("ws");
let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({ port: 8080 });
let uuid = require("uuid");

let wsList = [];

//conexion a mongoose
mongoose.connect('mongodb://localhost:27017/bananat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) {
        app.listen(port, () => {
            console.log("Servidor del API rest en http://localhost:" + port);
        });
        throw err;

    } else {
        app.listen(port, () => {
            console.log("Servidor del API rest en http://localhost:" + port);
        });
        console.log("Conexión con la base de datos: Correcta");
    }
});
//fin conex
app.options('*', cors());

app.use(logger("dev"));

app.use((req, res, next) => {
    //Asterisco, campo donde permito a las Ip's que tendran el acceso, este significa todas(el propio '*')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Athorization, Origin, Content-Type, Accept, Access-Control-Allow-Request-Method");
    //Tipos de llamadas permitidos a la API
    res.header("Access-Control-Allow-Request-Methods", "GET, POST,  OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST,  OPTIONS, PUT, DELETE");
    next();
});

//Se usará esta ruta para las funciones que vamos a ir implementando "v1"--> version 1. No se recomienda borrar las anteriores
app.use("/api/v1/users/", users);

wss.on('connection', function(ws) {
    console.log('WS connection established!');
    wsList.push(ws);
    ws.id = uuid.v4();
    console.log("Websocket ID : " + ws.id);

    ws.on('close', function() {
        wsList.splice(wsList.indexOf(ws), 1);
        console.log('WS closed!');
    });

    ws.on('message', function(message) {
        console.log('Got ws message from token : ' + JSON.parse(message).token);
        console.log("Got message from: " + JSON.parse(message).author);
        console.log("Type: " + JSON.parse(message).type);
        for (let i = 0; i < wsList.length; i++) {
            // send to everybody on the site
            wsList[i].send(message);

            //wsList[wsList.indexOf(ws.uuid) === message.wsID].send(message);
        }
    });
});

app.listen(8888);