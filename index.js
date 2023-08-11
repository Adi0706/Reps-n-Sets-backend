const express = require ('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const SignupModel = require('./models/signup');
const LoginModel = require('./models/login');

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/repsNsets')





app.post('/login',(req,res)=>{
    const {loginEmail,loginPassword}=req.body ; 
    LoginModel.findOne({email:loginEmail})
    .then(user=>{
        if(user){
            if(user.password === loginPassword){
                res.json("Login Successfull")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("Account not found")
        }
    })

})




app.post('/signups',(req,res)=>{
    const {name,email,password}=req.body;
    SignupModel.findOne({email:email}).then(user=>{
        if(user){
            res.json("Already have an Account")
        }else{
            SignupModel.create({
                name:name,email:email,password:password
            }).then(res=>res.json("Account Created"))
            .catch(err=>res.json("Error"))
        }
    }).catch(err=>res.json(err))
    
})

app.listen(3002,()=>{
    console.log("Server is Running")
})