const express = require('express');
const app = express();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const ejs = require('ejs');
app.use(express.static(__dirname + 'Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "Server-Frontend")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('./Middleware/s3-modules');
// let { addItem, searchItem, editItem, removeItem } = require('./Middleware/musicManager')
// let { userAuthenticator,addUserToDb ,checkDuplicacy} = require('./Middleware/userManager');
let {createUser,findUser,findMusic__MONGODB,addMusicto__MONGODB,updateMusicPREV__MONGODB}=  require('./Database/CONTROLDATABASEMAIN')
let hash_key;
let hash_user_pic;

const welcomeRoute = require("./Routes/Welcome")
const addSongRoute = require("./Routes/AddSong")
const AuthenRoute = require("./Routes/Authentication")
const LoginRoute = require("./Routes/Login")
const SignupRoute = require("./Routes/Signup")
//ROUTES
app.use('/',welcomeRoute)
app.use('/',addSongRoute)
app.use('/',AuthenRoute)
app.use("/",LoginRoute)
app.use("/",SignupRoute)

app.get("/signup", (req, res) => {
  res.render('signup.ejs');
})
app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})
