/* **************************************
 *************************************
 *************************************
 DEFINING EXPORTS AND SETTING UP FOR TUNESCAPE SERVER
 *************************************
 *************************************
 **************************************/

const express = require('express');
const app = express();
const encrypt = require("mongoose-encryption")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const ejs = require('ejs');
app.use(express.static(__dirname + 'Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "Server-Frontend")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('./middlewares/AMAZONS3');

let {createUser,findUser} = require("./database/controller/user/user.js")
let {ADD_MUSIC_TO_MONGO,UPDATE_PREV_MUSICS_THUMBNAIL_HASH_IN_MONGO,SEARCH_MUSIC_IN_MONGO} = require("./database/controller/music/music.js")

let hash_key;
let hash_user_pic;

const welcomeRoute = require("./routes/welcome")
const addSongRoute = require("./routes/addsong")
const AuthenRoute = require("./routes/authentication")
const LoginRoute = require("./routes/login")
const SignupRoute = require("./routes/signup")
const playsongRoute = require("./routes/playsong");
const API = require("./routes/api");
//ROUTES
app.get('/',(req,res)=>res.redirect("/tunescape.com"))
app.use('/',welcomeRoute)
app.use('/',addSongRoute)
app.use('/',AuthenRoute)
app.use("/",LoginRoute)
app.use("/",SignupRoute)
app.use("/",playsongRoute)
app.use("/",API)


app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})
