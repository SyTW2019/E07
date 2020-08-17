"use strict"

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = Schema({
    user: String,
    mail: String,
    password: String,
    username: String
});

module.exports = mongoose.model("User", userSchema);