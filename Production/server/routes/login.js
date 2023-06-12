const express = require("express");
const Router = express.Router();

function timer(res){
    setTimeout(()=>{
      res.redirect('/tunescape.com/stream');
    },2000)
}

function authenware(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    userAuthenticator(username, password) ? timer(res) : res.end("Not An User");
}
Router.post('/check',authenware)

Router.get('/tunescape.com/login', (req, res) => {
    res.render("login.ejs");
})

module.exports = Router
