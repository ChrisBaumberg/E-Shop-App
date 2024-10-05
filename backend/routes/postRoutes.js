const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");

const productRouter = express.Router();

const Product = require("../models/postModel");
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
    const {title, description, price, category, size, comparePrice, productSize} = req.body;
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    const post = new Product({title, imageUrl, description, price, category, size, comparePrice, productSize});
    try{
        await Post.create(post);
        res.status(201).send({message: "ProductCard created!"});
    }
    catch (error){
        res.status(500).send({message: "Failed to create ProductCard!"});
    }
});

productRouter.get("", async(req,res)=>{
    try{
        const products = await Product.find();
   
        res.status(201).send(products);
    }
    catch(error){
        
        res.status(500).send({message: "Could not fetch products!"});
    }
});


module.exports = productRouter;