const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const _ = require("Lodash");
const { cache } = require("ejs");

// Global Declarations

// Middle Ware
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


// Mongo URI
const mongoURI='mongodb://0.0.0.0:27017/jobDB'


// create mongodb connection
const conn = mongoose.createConnection(mongoURI)


// Mongoose connection
mongoose.connect(mongoURI);

//Mongoose Schemas
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fName: String,
  lName: String,
  phone: Number
});
const User = mongoose.model("User", userSchema);

//Front page
app.get("/", (req, res) => {
    res.render("front");
})

//Login page
app.route("/login")
  .get((req, res) => {
    res.render("login", {logem: false, logpw: false, logprev: ""});
  })
  .post((req, res) => {
    var email = req.body.email;
    var pass = req.body.pass;

    User.findOne({email: email}, (err, foundItem) => {
      if (foundItem){
        if (pass == foundItem.password){
          res.render("userfront");
        }else{
          res.render("login", {logem: false, logpw: true, logprev: email});
        }
      }else{
        logem = true;
        res.render("login", {logem: true, logpw: false});
      }
    })
  })

//SignUp page
app.route("/signup")
  .get((req, res) => {
    res.render("signup", {dub: false});
  })
  .post((req, res) => {
    var newEmail = req.body.email;
    var newPassword = req.body.pass;
    var newFName = req.body.fname;
    var newLName = req.body.lname;
    var newPhone = req.body.phone;

    User.findOne({email: newEmail}, (err, foundItem) => {
      if (foundItem){
        res.render("signup", {dub: true});
      }else{
        const newUser = new User({
          email: newEmail,
          password: newPassword,
          fName: newFName,
          lName: newLName,
          phone: newPhone
        });
        newUser.save();
      }
    })
  })












app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});