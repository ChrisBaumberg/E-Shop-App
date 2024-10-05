const express = require("express");
const {default: mongoose} = require("mongoose");
const app = express();

const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;
const postRouter = require("./routes/postRoutes");
//const registerRouter = require("./routes/registerRoutes");
const testRouter = require("./routes/testRoutes");


app.use(cors());
app.use("/uploads",express.static("uploads"));

app.use(async function(req, res, next) {
    await mongoose.connect(process.env.CONNECT_STRING);
    console.log("DB Connection");
    next();
    
});

//test routes
app.use("/test",testRouter);

//post routes
app.use("/api/posts", postRouter);

app.use(express.json());

//register routes
/*app.use("/api/register",registerRouter);


//loginRoutes
app.use("/api/login", loginRouter);

//resetRoutes
app.use("/api/auth/reset",resetRouter);

//postactionRoutes
app.use("/api/postAction", postActionRouter);

*/

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});