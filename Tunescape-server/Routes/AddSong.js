const express= require("express");
const Route = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('../Middleware/s3-modules');

Route.get('/addSongPage', (req, res) => {
    res.render('addPage.ejs');
  })
  
Route.post('/addsong', upload.single('song')/*Multer Middleware*/, async (req, res) => {
    const file = req.file
    const songname = req.body.song_name
    console.log(songname)
    console.log(file)
    const result = await uploadMusicToS3(file)
    // res.send({imagePath: `/images/${result.Key}`})
    console.log(result);
    // addItem({
    //   "song_name": songname,
    //   "hash_key": result.Key
    // })
    // console.log("$KEY : " + result.key);
    res.redirect('/SongPosted');
  })
  
Route.get('/SongPosted', (req, res) => {
    res.render('confirmation.ejs')
  })
  
module.exports = Route