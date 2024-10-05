const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const loginRouter = express.Router();
const User =require("../models/userModel");

//login route to send post request with email and password and check if
loginRouter.post("/", async(req, res)=>{
    const {email, password} = req.body;
    //check if both variables exist
    if (!email||!password){
      return res.status(404).send({message: "Please fill out all fields!"})
    }
    const existUser = await User.findOne({email});
    if(!existUser){
      return res.status(401).send({message: "User does not exist!"})
    }
  // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existUser.password)
    if(!isPasswordCorrect){
      return res.status(401).send({message: "Password is incorrect!"})
    }
  //create jwt token
    const token=jwt.sign({id: existUser.id}, process.env.JWT_SECRET);
    res.status(200).send({token, message: "Login successfull"});
  })

  module.exports = loginRouter;