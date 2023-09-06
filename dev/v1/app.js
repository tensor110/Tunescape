const express= require('express');
const connectToDatabase= require ('./database/controllers/connection.js');
const {addSongToDB, incrementLikes, incrementPlays} = require('./database/controllers/music.js')
const app= express();

app.use(express.json());

connectToDatabase();


app.post('/addsong',async (req,res)=>{
    // console.log(req.body);
    const music= req.body.music;
    const songHash= req.body.songHash;
    await addSongToDB(music, songHash);
    res.send("");
})

app.patch('/song-liked', async(req,res)=>{
    const songID= req.query.songID;
    const updatedLikes= incrementLikes(songID);
    res.send(updatedLikes);
})

app.patch('/song-played', async(req,res)=>{
    const songID= req.query.songID;
    const updatedPlays= incrementPlays(songID);
    res.send(updatedPlays);
})

app.listen(3000,()=>{
    console.log(`Server live at http://127.0.0.1:3000`);
})