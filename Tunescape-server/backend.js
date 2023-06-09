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

app.get('/addSongPage', (req, res) => {
  res.render('addPage.ejs');
})

app.post('/addsong', upload.single('song')/*Multer Middleware*/, async (req, res) => {
  const file = req.file
  const songname = req.body.song_name
  console.log(songname)
  console.log(file)
  const result = await uploadMusicToS3(file)
  // res.send({imagePath: `/images/${result.Key}`})
  console.log(result);
  addItem({
    "song_name": songname,
    "hash_key": result.Key
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
  userAuthenticator(username, password) ? timer(res) : res.end("Not An User");


})

function timer(res){
  setTimeout(()=>{
    res.redirect('/');
  },2000)
}

app.post('/adduser', upload.single('song')/*Multer Middleware*/,async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.username;
  const telephone = req.body.telephone;
  const age = req.body.age;
  const file = req.file
  const result = await UploadPicturesToS3(file);
  hash_user_pic=result.key;
  console.log(result);
  // checkDuplicacy(username,email,telephone)?res.write("User with this credentials is already an user.Please Log in to your ID"):addUserToDb(username,password,email,telephone,hash_user_pic);
  createUser(username,age,password,email,result.Key)
  res.end("Added to DB");
})

app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})
