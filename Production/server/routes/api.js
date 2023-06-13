const express = require("express");
const Route = express.Router();
let {createUser,findUser} = require("../database/controller/user/user")
let {CREATE_BUFFER,ADD_MUSIC_TO_MONGO,SEARCH_MUSIC_THUMBNAIL_IN_MONGO,UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO,SEARCH_MUSIC_IN_MONGO} = require("../database/controller/music/music.js")
const shuffleArray = require("../middlewares/shuffle-algorithm")

Route.get("/buffer-stream-to-fetch-song", async (req, res) => {
    try {
      await CREATE_BUFFER().then((data) => {
        let jsonData = JSON.parse(data);

        jsonData= shuffleArray(jsonData)
        while(jsonData.length>1){
            jsonData.pop()
        }
        res.send(jsonData)
      });

    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = Route