const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SignupModel = require('./models/signup');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/repsNsets', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/login', async (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    try {
      const user = await SignupModel.findOne({ email: loginEmail });
      if (user) {
        if (user.password === loginPassword) {
          res.json("Login Successful");
        } else {
          res.json("Incorrect Password");
        }
      } else {
        res.json("Account not found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Error fetching user data");
    }
});

app.post('/signups', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await SignupModel.findOne({ email: email });
    if (existingUser) {
      res.json("Already have an Account");
    } else {
      await SignupModel.create({
        name: name,
        email: email,
        password: password
      });
      res.json("Account Created");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Error");
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
