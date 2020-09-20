const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

const users = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  res.render("index");
});

app.get("/login",(req,res)=>{
  res.render("login");
});

app.post("/login",(req,res)=>{

});

app.get("/register",(req,res)=>{
  res.render("register");
});

app.post("/register",async(req,res)=>{
    try {
      const hashedPass = await bcrypt.hash(req.body.password, 10); //using bcrypt
      users.push({
        id : Date.now(),
        name : req.body.name,
        email: req.body.email,
        password : hashedPass
      });
      res.redirect("/login");
    } catch (e) {
      res.redirect("/register");
    }
    console.log(users);
});

app.listen(3000)
