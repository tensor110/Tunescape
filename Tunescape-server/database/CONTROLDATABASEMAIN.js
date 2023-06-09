const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/TunescapeDB';
const User = require('./Users');
const Music = require('./MusicSchema');
const { name } = require('ejs');

mongoose.connect(url).then(() => { console.log('connect') })

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

async function findUser(nam) {
    try {
        // const user = await User.find({username:nam})
        //const user = await User.where("username").equals(nam).where("age").gt("12").select( ash")
        const user = await User.where("username").equals(nam)

        console.log("User = " + user)
    }

    catch (e) { console.log(e.message) }
}

async function addMusicTo__MONGODB(title, songhash, artist, plays) {
    const music = new Music({
        Title: title,
        SongHash: songhash,
        Artist: artist,
        ThumbnailHash: "Pending..."
    })

    music.save()
        .then(() => { console.log("Saved Music") })
    // .then(() => { console.log(music) })
}



async function updateMusicPREV__MONGODB(title, ThumbnailHash) {
    try {
        const musicFinder = await Music.where("Title").equals(title).limit(1)
        // await  Music.updateOne({ Title: musicFinder[0].title }, { ThumbnailHash: ThumbnailHash }).then((err) => {
        //     if (err) console.log(err);
        //     else console.log("Update successful");
        //     console.log(musicFinder);
        // });
        musicFinder[0].ThumbnailHash = ThumbnailHash;
        console.log(musicFinder);
    } catch (e) { console.log(e.message) }
}

let music__SEARCHED;
async function findMusic__MONGODB(title) {
    try {
        music__SEARCHED = await Music.findOne({ Title: title });
        console.log( music__SEARCHED);
        return music__SEARCHED.SongHash;
    } catch (e) {
        console.log(e)
        // return null;
    }

}

findMusic__MONGODB("Paradise")
    .then(hash => {
        console.log("Hash =", hash);
    })
    .catch(error => {
        console.log("Error:", error);
    });












// TEST CASES : 
// addMusicTo__MONGODB("Paradise","0xhsuugyyywaj","Pritam",23)
// addMusicTo__MONGODB("Goku","0xhsuugyyywaj","Pritam",23)
// addMusicTo__MONGODB("Suzume","0xhsuugyyywaj","Pritam",23)
// addMusicTo__MONGODB("Tuade","0xhsuugyyywaj","Pritam",23)


// updateMusicPREV__MONGODB("Goku","newHash")

// updateMusicPREV__MONGODB("Saware","OXPIAISNDIF")
// createUser("soubhik gon hu main",23, "ojsaocb", 'soubhikhumai@test.com', '0xggfsjvcHIAGUFCAYYR7')
// createUser("Gonzi",23, "ojsaocb", 'soubhik@test.com', '0xggfsjvcHIAGUFCAYYR7')
// createUser("LEFT ASS",33, "gaand", 'soubhik@testicles.com', '0xggfsjvcHIAGUFCAYYR7lele')
// findUser("LEFT ASS")
module.exports = { createUser, findUser, findMusic__MONGODB, addMusicTo__MONGODB, updateMusicPREV__MONGODB }