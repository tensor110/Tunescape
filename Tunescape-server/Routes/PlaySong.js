const express = require("express");
const Route = express.Router();
let {createUser,findUser,findMusic__MONGODB,addMusicto__MONGODB,updateMusicPREV__MONGODB}=  require('./Database/CONTROLDATABASEMAIN')

Route.get('/fetch-song', (req, res) => {
    res.render('song-fetch.ejs')
})

Route.post('/getsong', async (req, res) => {
    const GetSongName = req.body.songGETname
    console.log(GetSongName);

    // console.log(searchItem(GetSongName));

    // ---------------------------

    // hash_key = searchItem(GetSongName);
    hash_key =findMusic__MONGODB(GetSongName).SongHash
    console.log(hash_key);
    res.redirect('/playsong');

}
)


Route.get('/playsong', async (req, res) => {
    // const DATA_COLLECTED = await downloadFromS3ViaCloudFront(hash_key);
    console.log(hash_key)
    res.render("player.ejs", { hash_key: hash_key })
})
