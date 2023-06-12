const express = require("express");
const app = express()
const Router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const {createUser} = require("../database/controller/user/user")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('../middlewares/AMAZONS3');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
Router.get("/tunescape.com/signup", (req, res) => {
    res.render('signup.ejs');
})

Router.post('/adduser', upload.single('profilepic')/*Multer Middleware*/, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.username;
    const telephone = req.body.telephone;
    const age = req.body.age;
    const file = req.file
    const result = await UploadPicturesToS3(file);
    console.log(result);
    // checkDuplicacy(username,email,telephone)?res.write("User with this credentials is already an user.Please Log in to your ID"):addUserToDb(username,password,email,telephone,hash_user_pic);
    await createUser(username, age, password, email, result.Key)
    res.end("Added to DB");
})

module.exports = Router