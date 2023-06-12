const timer = require("./timer")

function authenware(req,res,next){
    const username = req.body.username;
    const password = req.body.password;
    userAuthenticator(username, password) ? timer(res) : res.end("Not An User");
}

module.exports = authenware