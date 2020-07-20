"use strict"
let bcrypt = require('bcryptjs');
let token = require('../token/token.js');
let User = require("../models/users.model.js");

function login(req, res) {

    User.findOne({ user: req.body.user }, (error, found) => {
        if (error)
            return res.status(500).send({ message: "Internal Server Error" });
        else if (!found || found == null) {
            //return res.status(404).send({message:"User not found"})
            User.findOne({ mail: req.body.mail }, (error, found) => {
                if (error)
                    return res.status(500).send({ message: "Internal Server Error" });
                else if (!found || found == null) {
                    console.log(req.body.mail);
                    return res.status(404).send({ message: "User/Mail not found" });
                } else {
                    bcrypt.compare(req.body.password, found.password, (err, ok) => {
                        if (ok) {
                            res.status(200).send({ token: token.createToken(found), user: found.user });
                        } else
                            res.status(403).send("Can't log in");
                    });
                }
            });

        } else {
            bcrypt.compare(req.body.password, found.password, (err, ok) => {
                if (ok)
                    res.status(200).send({ token: token.createToken(found) });
                else
                    res.status(403).send("Can't log in");
            });
        }
    });
}

function register(req, res) {
    let user = new User();
    user.user = req.body.user;

    User.findOne({ user: req.body.user }, (error, found) => {
        if (error)
            return res.status(500).send({ message: "Internal Server Error" });
        else if (found)
            return res.status(403).send({ message: "User Invalid" });
        else {
            if (req.body.password) {
                bcrypt.hash(req.body.password, 5, (error, hash) => {
                    if (hash) {
                        user.password = hash;

                        if (req.body.mail) {
                            user.mail = req.body.mail;

                            if (user.user) {
                                user.save((error, savedUser) => {
                                    if (error)
                                        return res.status(500).send({ message: "Internal Server Error" });
                                    else
                                        return res.status(200).send({ message: "Ok" });
                                });
                            } else {
                                return res.status(400).send({ message: "Bad request" });
                            }
                        } else {
                            return res.status(400).send({ message: "Mail Not Found" });
                        }
                    } else
                        return res.status(500).send({ message: "Internal Server Error" });
                });
            } else
                return res.status(400).send({ message: "Bad request" });

        }
    });
}


function remove(req, res) {
    User.deleteOne({ _id: req.userToken.id }, (error, found) => {
        if (error)
            return res.status(500).send({ message: "Internal Server Error" });
        else if (!found)
            return res.status(404).send({ message: "User not found" });
        else
            return res.status(200).send({ message: "OK" });
    });
}


module.exports = {
    login,
    register,
    remove
}