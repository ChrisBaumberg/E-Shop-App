//imports
const express = require("express");
const {default: mongoose} = require("mongoose");
const app = express();
const cors = require("cors");

require("dotenv").config();
//import routes
const productRouter = require("./routes/productRoutes");
const registerRouter = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");
const resetRouter = require("./routes/resetRoutes");
const testRouter = require("./routes/testRoutes");
const PORT = process.env.PORT;
require("dotenv").config();

//middleware
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(async function(req,res,next){

    await mongoose.connect(process.env.CONNECT_STRING);
    console.log("Running DB connection");
    next();
});

app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`);
});

//test routes
app.use("/test", testRouter);

//products routes
app.use("/api/products", productRouter);

//register routes
app.use("/api/register", registerRouter);

//login routes
app.use("/api/login", loginRouter);

//reset routes
app.use("/api/reset", resetRouter);

