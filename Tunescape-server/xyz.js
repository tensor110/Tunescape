const express = require('express');
const app = express();
const multer = require('multer')
const ejs = require('ejs');
app.use(express.static(__dirname + 'Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({ dest: 'uploads-xyz/' })
app.set("view engine", "ejs");
app.set("views", "Server-Frontend")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('./Middleware/s3-modules');
let {addItem,searchItem,editItem,removeItem,getSong,searchSong} =require('./Middleware/musicManager');
let { userAuthenticator,addUserToDb ,checkDuplicacy} = require('./Middleware/userManager');
let hash_key;
let hash_user_pic;
let SONGNAME='notokay';
let result;

//ROUTES


app.get("/addsongname",(req,res)=>{
    res.render("page1.ejs")
})

app.post('/songname' ,(req,res)=>{
    SONGNAME=req.body.songname;
    console.log("SONGNAME IN SONGNAME", SONGNAME); // Debug statement
    addItem({"song_name":SONGNAME})
    res.redirect('/addmedia')
})

app.get('/addmedia',(req,res)=>{

  console.log("SONGNAME IN ADDMEDIA GET", SONGNAME); // Debug statement
  res.render("page2.ejs");
})

app.post('/addmedia',upload.single('media'),async (req,res)=>{
    const file =req.file;
    console.log(file)
    console.log("SONGNAME in ADDMEDIA POST", SONGNAME); // Debug statement
    // result=await uploadMusicToS3(file)  
    // console.log(result)
    res.redirect("/uploadThumbnail");
})

app.get('/uploadThumbnail',(req,res)=>{
  res.render("page3.ejs");
  console.log("SONGNAME in UPLOAD TNAIL GET", SONGNAME); // Debug statemenT
})

app.post("/uploadThumbnail",upload.single('mediapic'),async (req,res)=>{
    const file =req.file;
    console.log(file)
  console.log("SONGNAME in UPLOAD TNAIL POST", SONGNAME); // Debug statemenT
    // let result2=await UploadPicturesToS3(file)  
    // console.log(result2)
    console.log("Song name :: " + SONGNAME)
    console.log("Iske upar ana chahie")
    editItem(searchSong(SONGNAME),{
        "song_name":searchSong(SONGNAME),
        "music_hash":"result.Key",
        "thumbnail_hash":"result2.Key"
}) 
    res.end("Song Uploaded!");
});


app.get('/', (req, res) => {
  res.render('addsongname.ejs');
})


app.post('/addsongname', async (req, res) => {
  const songname = req.body.song_name
  console.log(songname)
  addItem({
    "song_name": songname
  })
  // console.log("$KEY : " + result.key);
  res.redirect('/SongPosted');
})

app.get('/SongPosted', (req, res) => {
  res.render('confirmation.ejs')
})

app.get('/fetch-song', (req, res) => {
  res.render('song-fetch.ejs')
})

app.post('/getsong', async (req, res) => {
  const GetSongName = req.body.songGETname
  console.log(GetSongName);

  console.log(searchItem(GetSongName));

  // ---------------------------

  hash_key = searchItem(GetSongName);
  res.redirect('/playsong');
}
)


app.get('/playsong', async (req, res) => {
  // const DATA_COLLECTED = await downloadFromS3ViaCloudFront(hash_key);
  console.log(hash_key)
  res.render("player.ejs",{hash_key:hash_key})
})

app.get('/authen', (req, res) => {
  console.log("User hit homepage")
  res.render("home.ejs");
})

app.post('/l_or_s', (req, res) => {
  console.log(req.body.login)
  console.log(req.body.signup)
  req.body.login ? res.redirect('/login') : res.redirect('/signup');
})

app.get('/login', (req, res) => {
  res.render("login.ejs");
})

app.get("/signup", (req, res) => {
  res.render('signup.ejs');
})

app.post('/check', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
  console.log(username);
  console.log(password);
  userAuthenticator(username, password) ? res.end("User") : res.end("Not An User");
})

app.post('/adduser', upload.single('song')/*Multer Middleware*/,async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.username;
  const telephone = req.body.password;
  const file = req.file
  const result = await uploadMusicToS3(file);
  hash_user_pic=result.key;
  console.log(result);
  checkDuplicacy(username,email,telephone)?res.write("User with this credentials is already an user.Please Log in to your ID"):addUserToDb(username,password,email,telephone,hash_user_pic);
  res.end("Added to DB");
})

app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})


app.get('/dashboard',async(req,res)=>{
  // res.render('user_dashboard.ejs',{username:"Soubhik",email:"SKG@123"})
  const DATA_COLLECTED2 = await downloadfromS3('9212e9d5a62b73910a9ceeaec05d7834');
  console.log(DATA_COLLECTED2)
  DATA_COLLECTED2.pipe(res)
})

app.get('/xyz',(req,res)=>{
  res.render("xyz.ejs",{key:'8b99b4004c5f1900122f1b0807aa5c32'})
})