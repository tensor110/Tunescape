const express = require('express');
const app = express();
const multer = require('multer')
const ejs = require('ejs');
app.use(express.static(__dirname + 'Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({ dest: 'uploads/' })
app.set("view engine", "ejs");
app.set("views", "Server-Frontend")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('./Middleware/s3-modules');
// let { addItem, searchItem, editItem, removeItem } = require('./Middleware/musicManager')
// let { userAuthenticator,addUserToDb ,checkDuplicacy} = require('./Middleware/userManager');
let {createUser,findUser,addMusicto__MONGODB,updateMusicPREV__MONGODB}=  require('./Database/CONTROLDATABASEMAIN')
let hash_key;
let hash_user_pic;


//ROUTES

app.get('/',(req,res)=>{
  res.render('Welcome.ejs');
})

app.post('/authentify',(req,res)=>{
    res.redirect('/authen');
})

app.post('/songify',(req,res)=>{
  res.redirect("/addSongPage");
})

app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})
