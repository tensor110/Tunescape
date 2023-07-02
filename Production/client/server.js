const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static('public'));



app.get('/', (req, res) => {

  res.render('home');
});


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