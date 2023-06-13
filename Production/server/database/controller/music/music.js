const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/TunescapeDB';
const Music = require('../../schemas/Music');

mongoose.connect(url).then(() => { console.log('connect') })

async function ADD_MUSIC_TO_MONGO(title,artist,songhash) {
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
      const musicFinder = await Music.findOne({ Title: title }).lean();
      console.log("musicFinder = ", musicFinder);
      
      if (musicFinder) {
        musicFinder.ThumbnailHash = ThumbnailHash;
        await Music.findByIdAndUpdate(musicFinder._id, musicFinder);

        console.log("Updated musicFinder:", musicFinder);
      } else {
        console.log("No music found with the provided title:", title);
      }
    } catch (e) {
      console.log(e.message);
    }
  }



async function SEARCH_MUSIC_IN_MONGO(title) {
    try{
       console.log("called")
       const music = await Music.where("Title").equals(title)
       if (music)
            return music[0].SongHash
    }catch(e){
        console.log(e)
    }
}

async function SEARCH_MUSIC_THUMBNAIL_IN_MONGO(title) {
    try{
       console.log("called")
       const music = await Music.where("Title").equals(title)
       if (music)
            return music[0].ThumbnailHash
    }catch(e){
        console.log(e)
    }
}

module.exports = {ADD_MUSIC_TO_MONGO,SEARCH_MUSIC_THUMBNAIL_IN_MONGO, SEARCH_MUSIC_IN_MONGO,UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO}