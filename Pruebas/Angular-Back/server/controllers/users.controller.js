"use strict"
let bcrypt = require('bcryptjs')
let token = require('../token/token.js')
let User = require("../models/users.model.js")


function login(req, res){
	User.findOne({user:req.body.user},(error, found) => {
		if(error)
			return res.status(500).send({message:"Internal Server Error"})
		else if(!found || found == null)
			return res.status(404).send({message:"User not found"})
		else {
			bcrypt.compare(req.body.password, found.password, (err, ok) => {
				if(ok)
					res.status(200).send({token:token.createToken(found)})
				else
					res.status(403).send("Can't log in")
			})
		}

	})
}

function register(req, res){
	let user = new User()
	user.user = req.body.user

	User.findOne({user:req.body.user}, (error, found) => {
		if(error)
			return res.status(500).send({message:"Internal Server Error"})
		else if(found)
			return res.status(403).send({message:"User Invalid"})
		else{
			if(req.body.password){
				bcrypt.hash(req.body.password, 5, (error, hash) => {
					if(hash) {
						user.password = hash

						if(user.user) {
							user.save((error, savedUser) => {
								if(error)
									return res.status(500).send({message:"Internal Server Error"})
								else
									return res.status(200).send({message:"Ok"})
							}) 
						}
						else
							return res.status(500).send({message:"User Missing"})
					}
					else
						return res.status(500).send({message:"Internal Server Error"})
				})
			}
			else
				return res.status(500).send({message:"Password Missing"})
			
		}
	})

	
}

function remove(req, res){
	User.deleteOne({_id:req.userToken.id},(error, found) => {
		if(error)
			return res.status(500).send({message:"Internal Server Error"})
		else if(!found)
			return res.status(404).send({message:"User not found"})
		else
			return res.status(200).send({message:"OK"})
	})
}


module.exports = {
	login,
	register,
	remove
}