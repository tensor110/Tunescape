const express = require("express");
const Router = express.Router();

function timer(res){
    setTimeout(()=>{
      res.redirect('/tunescape.com/stream');
    },2000)
}

Router.get('/tunescape.com/login', (req, res) => {
    res.render("login.ejs");
})

Router.post('/check', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
    console.log(username);
    console.log(password);
    userAuthenticator(username, password) ? timer(res) : res.end("Not An User");
})

module.exports = Router
