const {default: mongoose} = require("mongoose");

//productSchema

const productSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    productSize: String,
    price: String,
    size: String,
    comparePrice: String,
    category: String,
    picture: String,
    despositValue: String,
    productNumber: String,
})

const Product= mongoose.model("E-Shop-Products", productSchema);

module.exports = Product;