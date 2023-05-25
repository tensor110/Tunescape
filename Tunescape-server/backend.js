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
let { uploadToS3, downloadfromS3 } = require('./Middleware/s3-modules');

let { addItem, searchItem, editItem, removeItem } = require('./scapegoat')

let hash_key;
app.get('/', (req, res) => {
  res.render('addPage.ejs');
})

app.post('/addsong', upload.single('song')/*Multer Middleware*/, async (req, res) => {
  const file = req.file
  const songname = req.body.song_name
  // console.log(songname)
  // console.log(file)
  //   res.send({imagePath: `/images/${result.Key}`})
  const result = await uploadToS3(file)
  console.log(result);
  addItem({
    "song_name": songname,
    "hash_key": result.key
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
  // const DATA_COLLECTED= await downloadfromS3(hash_key);
  // console.log(DATA_COLLECTED)
  // DATA_COLLECTED.pipe(res)

}
)


app.get('/playsong',async (req, res) => {
  const DATA_COLLECTED = await downloadfromS3(hash_key);
  console.log(DATA_COLLECTED)
  DATA_COLLECTED.pipe(res)
})

app.listen(PORT || process.env.PORT, () => {
  console.log(`App live @ :http://localhost:${PORT} `)
})





