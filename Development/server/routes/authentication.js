const express = require("express");
const Route = express.Router();

Route.get('/tunescape.com/auth', (req, res) => {
    res.render("home.ejs");
})

Route.post('/l_or_s', (req, res) => {
    req.body.login ? res.redirect('/tunescape.com/login') : res.redirect('/tunescape.com/signup');
})

module.exports =  Route;