const express = require("express");
const Router = express.Router();
const authenware = require('../middlewares/authenware')

Router.post('/check',authenware)

Router.get('/tunescape.com/login', (req, res) => {
    res.render("login.ejs");
})

module.exports = Router
