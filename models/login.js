const mongoose = require('mongoose');

const Loginschema = new mongoose.Schema({
    loginEmail: String,
    loginPassword: String
});

const LoginModel = mongoose.model("logins", Loginschema);

module.exports = LoginModel;
