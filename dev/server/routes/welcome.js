const express = require('express');
const Router = express.Router();

Router.get('/tunescape.com',(req,res)=>{
  res.render('Welcome.ejs');
})

Router.post('/authentify',(req,res)=>{
    res.redirect('/tunescape.com/auth');
})

Router.post('/songify',(req,res)=>{
  res.redirect("/tunescape.com/creatorspace");
})

module.exports= Router