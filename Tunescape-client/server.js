const express= require('express')
const app = express();
const ejs =require('ejs')
app.set('view engine','ejs');
app.set("views","views");
app.use(express.static('public'));

app.get('/', (req, res) => {
  
    res.render('home');
  });
app.get('/stream', (req, res) => {
  
    res.render('stream');
  });

app.use((req, res, next) => {
    res.status(404).render('404');
  });  

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });