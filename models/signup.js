const mongoose = require('mongoose')


const Signupschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const SignupModel = mongoose.model("signup", Signupschema);

module.exports = SignupModel ;