const mongoose = require('mongoose');

const Loginschema = new mongoose.Schema({
    loginEmail: String,
    loginPassword: String
});

const LoginModel = mongoose.model("login", Loginschema);

module.exports = LoginModel;
