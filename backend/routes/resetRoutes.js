const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


const User = require("../models/userModel");
require("dotenv").config();
const resetRouter = express.Router();


resetRouter.post("/", async(req, res)=>{
    const {email} = req.body;
    if(!email){
      return res.status(404).send({message: "Please fill Email field"})
    }
    try{
      const userExists = await User.findOne({email});
      if(!userExists){
        return res.status(404).send({message: "User does not exist!"});
      }
      const code = Math.floor(1000000 + Math.random() * 900000);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        aurth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD_EMAIL,
        },
      });
      const mailMessage={
        from: process.env.EMAIL,
        to: email, 
        subject: "Reset your with the six digit number",
        text: `Your reset Code is ${code}`
      };
      transporter.sendMail(mailMessage, (error, info)=>{
        if (error){
          console.log(`Some Error: ${error}`);
        }
        else{
          console.log(info);
          const token = jwt.sign({email: email}, process.env.JWT_SECRET);
          res.status(200).send({code, token, message: "Reset number sent to Email"});
        }
      });
    }
    catch(e){
      return res.status(500).send({message: "Server Errror occured!"});
    }
  })
  
  
  
resetRouter.put("/newPassword", async(req, res)=>{
    try{
      const password = req.body.password;
      const token = req.headers.authorization.split(" ")[1];
      console.log(password, token);
      if(!password || !token){
        return res.status(404).send({message: "Missing password!"});
  
      }
  
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  
      const existUser = User.findOne({email: decodedToken.email});
      if (!existUser){
        return res.status(404).send({message: "User does not exist!"});
      }
      
      const newHashedPassword = await bcrypt.hash(password, 10);
      const userSet = await User.findOneAndUpdate(
        {email: decodedToken.email},
        { $set:{hashPassword: newHashedPassword}}
      );
      console.log(password, hashPassword);
      console.log("password hashed and saved");
      res.status(200).send({message: "Password updated!"});
    }
    catch(e){
      res.status(500).send({message: "Internal Server Error!"});
    }
  })

  module.express = resetRouter;