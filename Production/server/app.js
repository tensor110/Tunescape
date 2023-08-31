const express = require('express');
const cors= require('cors');
const app = express();
app.use(cors());
const multer = require('multer')
app.use(express.static(__dirname + 'Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "Server-Frontend");
const welcomeRoute = require("./routes/welcome")
const addSongRoute = require("./routes/addsong")
const AuthenRoute = require("./routes/authentication")
const LoginRoute = require("./routes/login")
const SignupRoute = require("./routes/signup")
const playsongRoute = require("./routes/playsong");
const API = require("./routes/api");
//ROUTES
app.get('/',(req,res)=>res.redirect("/tunescape.com"))
app.use('/',welcomeRoute)
app.use('/',addSongRoute)
app.use('/',AuthenRoute)
app.use("/",LoginRoute)
app.use("/",SignupRoute)
app.use("/",playsongRoute)
app.use("/",API)


app.listen(process.env.PORT || PORT, () => {
  console.log(`App live @${PORT} `)
})
