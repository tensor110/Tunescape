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

    result? timer(res) : res.end("Not An User");
}

module.exports = authenware