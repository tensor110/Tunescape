const express = require("express");
const Route = express.Router();
let {createUser,findUser} = require("../database/controller/user/user")
let {ADD_MUSIC_TO_MONGO,UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO,SEARCH_MUSIC_IN_MONGO} = require("../database/controller/music/music.js")


Route.get('/tunescape.com/stream', (req, res) => {
    res.render('song-fetch.ejs')
})

Route.post('/getsong', async (req, res) => {
    const GetSongName = req.body.songGETname
    console.log(GetSongName);
    hash_key =findMusic__MONGODB(GetSongName).SongHash
    console.log(hash_key);
    res.redirect('/tunescape.com/stream/song');

}
)
Route.get('/tunescape.com/stream/song', async (req, res) => {
    console.log(hash_key)
    res.render("player.ejs", { hash_key: hash_key })
})

module.exports = Route