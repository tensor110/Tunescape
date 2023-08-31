const express = require("express");
const Route = express.Router();
let {CREATE_BUFFER} = require("../database/controller/music/music.js")
const shuffleArray = require("../middlewares/shuffle-algorithm")

Route.get("/buffer-stream-to-fetch-song", async (req, res) => {
    try {
      await CREATE_BUFFER().then((data) => {
        let jsonData = JSON.parse(data);
        jsonData= shuffleArray(jsonData)
        // @mogulcoder26 COMMENTED THESE LINES FOR DEV UPLOAD TESTING
        // while(jsonData.length>20){
        //     jsonData.pop()
        // }
        res.send(jsonData)
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = Route