const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/TunescapeDB';
const Music = require('../../schemas/Music');

mongoose.connect(url).then(() => { console.log('connect') })


async function ADD_MUSIC_TO_MONGO(title, songhash, artist, plays) {
    const music = new Music({
        Title: title,
        SongHash: songhash,
        Artist: artist,
        ThumbnailHash: "Pending..."
    })
    music.save()
        .then(() => { console.log("Saved Music") })
}


async function UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO(title, ThumbnailHash) {
    try {
        const musicFinder = await Music.where("Title").equals(title)
        musicFinder[0].ThumbnailHash = ThumbnailHash;
        console.log(musicFinder);
    } catch (e) { console.log(e.message) }
}

    
async function SEARCH_MUSIC_IN_MONGO(title) {
    try{
    let musicFound=[];
    //    let music = await Music.findOne({ Title: title });
       let music = title
       if (music)
       await musicFound.push(music);
       
    }catch(e){
        console.log(e)
    }
}

SEARCH_MUSIC_IN_MONGO()

module.exports = {ADD_MUSIC_TO_MONGO, SEARCH_MUSIC_IN_MONGO,UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO}