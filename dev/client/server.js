const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.set("views", "views");
app.use(express.static('public'));
const HOST = process.env.PORT || 3000;


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

app.listen(HOST, () => {
  console.log(`Server is running on ${HOST}`);
});