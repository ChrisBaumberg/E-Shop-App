const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");

const productRouter = express.Router();

const Post = require("../models/postModel");
const User = require("../models/userModel");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"uploads/");
    
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },

});


const upload = multer({storage});

//posts






productRouter.post("/", upload.single("image"), async (req,res)=>{
    console.log(req);
    const {id, 
        title, 
        description, productSize, price, size, comparePrice, category, picture} = req.body;
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    const product = new Post({id, 
        title, 
        description, productSize, price, size, comparePrice, category, picture});
    try{
        await Post.create(product);
        res.status(201).send({message: "Post created!"});
    }
    catch (error){
        res.status(500).send({message: "Failed to create Post!"});
    }
});

productRouter.get("", async(req,res)=>{
    try{
        const products = await Post.find();
   
        res.status(201).send(products);
    }
    catch(error){
        
        res.status(500).send({message: "Could not fetch products!"});
    }
});


module.exports = productRouter;