const { findUser } = require("../database/controller/user/user");
const timer = require("./timer")
const md5 = require("md5")


async function authenware(req,res,next){
    const username = req.body.username;
    const password = await md5( req.body.password);

    let foundUser = []
    let result = await findUser(foundUser,username,password).then(()=>{
        if(foundUser[0] === undefined){
            return false
        }
        else{
            return true;
        }
    })
    console.log("result is " + result);
    res.locals.isAuthenticated = result;
    console.log(`res.locals.isAuthenticated in authenware = ${res.locals.isAuthenticated}`)
    result?res.redirect(`/tunescape.com/stream/${password}`): res.redirect("/tunescape.com/signup");
}

module.exports = authenware