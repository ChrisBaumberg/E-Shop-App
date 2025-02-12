const {default: mongoose} = require("mongoose");

//User Schema

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
      },
      email:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50
      },
      hashPassword: {
        type: String,
        required: true,
        minlength: 5
      },
      id: {
        type: String,
        required: true
      },
      prename: {
        type: String
      },
      familyname:{
        type: String
      },
     
        street: {
          type: String
        },
        houseNumber: {
          type: String
        },
        cityCode: {
          type: String,
          length: 5
        },
        city: {
          type: String
        },
     
      role: {
        type: String,
        required: true,
        enum: ["client", "admin"]
      },
})

const User = mongoose.model("E-Shop-Users", userSchema);

module.exports = User;