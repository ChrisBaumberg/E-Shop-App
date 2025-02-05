const express = require("express");
const bodyParser = require("body-parser");
const jsonParser=bodyParser.json();
require("dotenv").config();
const User = require("../models/userModel");

const updateRouter = express.Router();

updateRouter.put("/", jsonParser, async(req, res)=>{
   
    try{
        const {id, prename, familyname, street, houseNumber, cityCode, city } = req.body;
     
        const existUser = User.findOne({id});
      
        const userSet = await User.findOneAndUpdate({id: id},{ $set: { prename: prename, familyname: familyname, street: street, houseNumber:houseNumber, cityCode:cityCode, city:city}});
       
        res.status(201).send({message: "User successfully updated!"})
    }
    catch(error){
        console.log("Update fehlgeschlagen!");
        res.status(500).send({message: "Server update failed"});
    }
});

module.exports = updateRouter;

