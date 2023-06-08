const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/TunescapeDB';
const User = require('./Users');
const { name } = require('ejs');

mongoose.connect(url).then(() => { console.log('connect') })


async function createUser(name, age, pass, mail, hash) {

    try {
        const user = new User({
            username: name,
            age: age,
            email:mail,
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
// createUser("soubhik gon hu main",23, "ojsaocb", 'soubhikhumai@test.com', '0xggfsjvcHIAGUFCAYYR7')
// createUser("Gonzi",23, "ojsaocb", 'soubhik@test.com', '0xggfsjvcHIAGUFCAYYR7')
// createUser("LEFT ASS",33, "gaand", 'soubhik@testicles.com', '0xggfsjvcHIAGUFCAYYR7lele')

async function findUser(nam){
    try{
        // const user = await User.find({username:nam})
        //const user = await User.where("username").equals(nam).where("age").gt("12").select( ash")
        const user = await User.where("username").equals(nam)

        console.log("User = " + user)
    }
    catch(e){console.log(e.message)}
}

findUser("LEFT ASS")