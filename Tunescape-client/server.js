const express = require('express')
const path = require('path')
const app = express();
const ejs = require('ejs')
app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static('public'));









// const songList = [{
//   title: "As it was",
//   artist: "Harry Styles",
//   plays: 20,
//   hash : "2c0dcdda6b7fb68330c50257acb4c735",
// },
// {
//   title: "Suzume",
//   artist: "Still dk",
//   plays: 69,
//   hash : "13c77c5cb8243d034ca702c5b476a8da",
// },
// {
//   title: "Dil ibbadat",
//   artist: "KK",
//   plays: 612,
//   hash : "062eb117d277e65c5c7c6cb5527062a3",
// },
// {
//   title: "Suzume-again",
//   artist: "fourth one",
//   plays: 169,
//   hash : "603b38f1c76772d94e1d1a521280aeea",
// }]



app.get('/', (req, res) => {

  res.render('home');
});


// app.get('/stream', (req, res) => {

//   res.render('stream');
  
// });

// app.get('/data', (req,res) =>{
//   res.send(songList);

// });

app.get('/stream', (req, res) => {

  res.render('stream');
  
});
app.get('/login', (req, res) => {

  res.render('login');
  
});


app.get('/dashboard', (req, res) => {
  
    res.render('dashboard');
  });
app.get('/search', (req, res) => {
  
    res.render('search');
  });

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});