const mongoose= require("mongoose");
const Song= require("../schemas/song.js");

  
async function addSongToDB(music,songHash){
    
    const newSong= new Song({

        title: music.title,
        artist: music.artist,
        songHash: songHash,
        thumbnailHash: music.thumbnailHash,
        uploadedBy: music.uid

    })

    try{
        await newSong.save();
        console.log(`${songHash}/${music.uid} uploaded successfully.`)
    }catch(err){
        console.log(`Error uploading ${songHash}/${music.uid}: `, err.message);
    }

}

async function incrementLikes(songID){
    console.log(songID);

    const updatedSong= await Song.findByIdAndUpdate(
        songID,
        {$inc: {likes: 1}},
        {new: true}

    )

    return updatedSong.likes;
}
async function incrementPlays(songID){

    const updatedSong= Song.findByIdAndUpdate(
        songID,
        {$inc: {plays: 1}},
        {new: true}

    )

    return updatedSong.plays;
}

module.exports= {
    addSongToDB,
    incrementLikes,
    incrementPlays
}

