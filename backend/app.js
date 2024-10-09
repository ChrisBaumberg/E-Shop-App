const express = require("express");

const {default: mongoose} = require("mongoose");
const app = express();

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;
const productRouter = require("./routes/productRoutes");
const registerRouter = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");
const resetRouter = require("./routes/resetRoutes");
const testRouter = require("./routes/testRoutes");


app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use>(express.json);


app.use(async function(req, res, next) {
    await mongoose.connect(process.env.CONNECT_STRING);
    console.log("DB connection");
    next();
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

app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`);
});