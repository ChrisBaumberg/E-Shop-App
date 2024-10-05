const { default: mongoose } = require("mongoose");


//PostSchema

const producttSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    price: String,
    category: String,
    imageUrl: String,
    size:String,
    comparePrice: String,
    productSize: String,
    desposit: Boolean
});

const Product = mongoose.model("e-shop-products", postSchema);

module.exports = Product;