const express= require("express");
const Route = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('../Middleware/s3-modules');

Route.get('/tunescape.com/creatorspace', (req, res) => {
    res.render('addPage.ejs');
  })
  
Route.post('/addsong', upload.single('song')/*Multer Middleware*/, async (req, res) => {
    const file = req.file
    const songname = req.body.song_name
    console.log(songname)
    console.log(file)
    const result = await uploadMusicToS3(file)
    console.log(result);
    res.redirect('/confirmation/song-uploaded');
  })
  
Route.get('/confirmation/song-uploaded', (req, res) => {
    res.render('confirmation.ejs')
  })
  
module.exports = Route