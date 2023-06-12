const express = require("express");
const Route = express.Router();

Route.get('/tunescape.com/auth', (req, res) => {
    console.log("User hit homepage")
    res.render("home.ejs");
})

Route.post('/l_or_s', (req, res) => {
    console.log(req.body.login)
    console.log(req.body.signup)
    req.body.login ? res.redirect('/tunescape.com/login') : res.redirect('/tunescape.com/signup');
})

module.exports =  Route;