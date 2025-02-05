const express = require("express");
const rateLimit=require("express-rate-limit");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jsonParser=bodyParser.json();
//model
const User = require("../models/userModel")
const registerRouter = express.Router();

//limit requests
const limiter = rateLimit({
    windowMs: 15* 60 * 1000, //15 minutes
    limit: 5,
  });
  

registerRouter.post("/",limiter,jsonParser, async (req, res)=>{

    console.log("RegisterRoute")
    try{
      console.log("destructering")
 
      console.log("reqbody",req.body)
     
      //Daten extrathieren - destructering

      const { id, username, email, password, role } = req.body;
      console.log("Alles ausgefüllt?");
      if ( !id|| !username|| !email|| !password|| !role){
        return res.status(404).send({message: "Please fill out all fields"});
      }

      console.log("existiert User?")
      //existiert User?
      const existingUser = await User.findOne({ email });
      if(existingUser){
        console.log("Email wird bereits verwendet!")
        return res.status(409).send({message: "User already exists"});
        
      }
      console.log("hashPassword")
      const hashPassword = await bcrypt.hash(password, 10);
      console.log("UserSchema")
      const user = new User({id, username, email, hashPassword, role});
      
      await User.create(user);
      res.status(201).send({message: "User successfully created!"});
    }
    catch(error){
      console.log("Registrierung fehlgeschlagen!, Fehler:", error)
      res.status(500).send({message: "Server register failed"});
    }
  });

  module.exports = registerRouter;