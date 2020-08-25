"use strict"

let express = require("express");
let api = express.Router();
let UserController = require("../controllers/users.controller.js");
let md_auth = require("../token/auth.js");

api.post('/login', UserController.login);
api.post('/register', UserController.register);
api.delete('/remove', md_auth.authentication, UserController.remove);

module.exports = api;