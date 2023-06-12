const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/TunescapeDB';
const User = require('../../schemas/User');

// mongoose.connect(url).then(() => { console.log('connect') })

async function createUser(name, age, pass, mail, hash) {
    try {
        const user = new User({
            username: name,
            age: age,
            email: mail,
            password: pass,
            ProfileHash: hash
        })

        user.save()
            .then(() => { console.log("User Saved") })
            .then(() => { console.log(user) })
    } catch (e) {
        console.log("Error");
    }

}


var foundUser = []

async function findUser(enteredname) {
    try {
        const user = await User.where("username").equals(enteredname)
        if(user) foundUser.push(user)
    }
    catch (e) { console.log(e.message) }
}


module.exports = { createUser, findUser}