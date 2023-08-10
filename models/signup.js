const mongoose = require('mongoose')


const Signupschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const SignupModel = mongoose.model("signups", Signupschema);

module.exports = SignupModel ;