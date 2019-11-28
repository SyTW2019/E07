"use strict"

let mongoose = require("mongoose")
let app = require("./app.js")
let port = process.env.PORT || 4300
let logger = require("morgan")
let users = require("./routes/users.route.js")

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

app.use(logger("adev"))

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