"use strict"

let express = require("express")
let api = express.Router()
let UserController = require("../controllers/users.controller.js")
let md_auth = require("../token/auth.js")

//api.post('/update', UserController.update)
api.post('/login', UserController.login)
api.post('/register', UserController.register)
//api.post('/chpwd', md_auth.authentication, UserController.chpwd)
api.delete('/remove', md_auth.authentication, UserController.remove)
//api.get('/profile', UserController.profile)

module.exports = api