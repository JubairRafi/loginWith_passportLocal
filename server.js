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

app.post("/register",(req,res)=>{

});

app.get("/register",(req,res)=>{
  res.render("register");
});

app.post("/register",(req,res)=>{
  
});

app.listen(3000)
