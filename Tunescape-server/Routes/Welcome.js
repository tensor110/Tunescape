const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
  res.render('Welcome.ejs');
})

Router.post('/authentify',(req,res)=>{
    res.redirect('/authen');
})

Router.post('/songify',(req,res)=>{
  res.redirect("/addSongPage");
})


module.exports= Router