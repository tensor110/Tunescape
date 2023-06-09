const express= require('express')
const path= require('path')
const app = express();
const ejs =require('ejs')
app.set('view engine','ejs');
app.set("views","views");
app.use(express.static('public'));


const songSrc= 'https://drive.google.com/uc?id=1zc6HhaAM34wSqOUvSxfsbKT8lOMetN6O';

app.get('/', (req, res) => {
  
    res.render('home');
  });
app.get('/stream', (req, res) => {
  
    res.render('stream',{
      songSrc
    });
  });
app.get('/dashboard', (req, res) => {
  
    res.render('dashboard');
  });
app.get('/login', (req, res) => {
  
    res.render('login');
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