const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const bodyParser = require("body-parser");
const jsonParser=bodyParser.json();

const productRouter = express.Router();
require("dotenv").config();
//models
const Product = require("../models/productModel");
/*const User = require("../models/userModel");

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        console.log("des.cb:",cb);
        cb(null,"uploads/");
    
    },
    filename: (req, file, cb) => {
        console.log("file.cb:",cb);
        cb(null, `${Date.now()}-${file.originalname}`);
    },

});

const upload = multer({storage});*/

//posts
productRouter.post("/", jsonParser, async (req,res)=>{
   

    const {id, 
        title, 
        description, productSize, price, size, comparePrice, category, picture, despositValue} = req.body;
       /* const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        */
       
        
    const product = new Product({id, 
        title, 
        description, productSize, price, size, comparePrice, category, picture, despositValue});
    try{
        await Product.create(product);
        res.status(201).send({message: "Product created!"});
    }
    catch (error){
        res.status(500).send({message: "Failed to create Product!"});
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