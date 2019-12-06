"use strict"

let mongoose = require("mongoose")
let Schema = mongoose.Schema

let userSchema = Schema({
	user: String,
	mail: String,
	password: String,
	birthday: Number
})

module.exports = mongoose.model("User", userSchema)