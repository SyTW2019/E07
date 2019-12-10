"use strict"

let mongoose = require("mongoose")
let app = require("./app.js")
let port = process.env.PORT || 4300
let logger = require("morgan")
let users = require("./routes/users.route.js")

let WebSocket = require("ws");
let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({ port: 8080 });

let wsList = [];

//conexion a mongoose
mongoose.connect("mongodb://localhost:27017/bananat", (err, res) => {
	if (err){
		app.listen(port, () => {
			console.log("Servidor del API rest en http://localhost:" + port)
		})
		throw err

	} else {
		app.listen(port, () => {
			console.log("Servidor del API rest en http://localhost:" + port)
		})
		console.log("Conexión con la base de datos: Correcta")
	}
})
//fin conex

app.use(logger("dev"))

app.use( (req, res, next) => {
//Asterisco, campo donde permito a las Ip's que tendran el acceso, este significa todas(el propio '*')
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Athorization, Origin, Content-Type, Accept, Access-Control-Allow-Request-Method")
//Tipos de llamadas permitidos a la API
	res.header("Access-Control-Allow-Request-Methods", "GET, POST,  OPTIONS, PUT, DELETE")
	res.header("Allow", "GET, POST,  OPTIONS, PUT, DELETE")
	next()
})

//Se usará esta ruta para las funciones que vamos a ir implementando "v1"--> version 1. No se recomienda borrar las anteriores
app.use("/api/v1/users/", users)


wss.on('connection', function(ws) {
    console.log('WS connection established!')
    wsList.push(ws);

    ws.on('close', function() {
        wsList.splice(wsList.indexOf(ws), 1);
        console.log('WS closed!')
    });

    ws.on('message', function(message) {
        console.log('Got ws message: ' + message);
        for (let i = 0; i < wsList.length; i++) {
            // send to everybody on the site
            wsList[i].send(message);
        }
    });
});

app.listen(8888);