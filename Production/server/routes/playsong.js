const express = require("express");
const Route = express.Router();
let {createUser,findUser,findMusic__MONGODB,addMusicto__MONGODB,updateMusicPREV__MONGODB}=  require('./Database/CONTROLDATABASEMAIN')

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
