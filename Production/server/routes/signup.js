const express = require("express");
const Router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })



Router.get("/signup", (req, res) => {
    res.render('signup.ejs');
})
Router.post('/adduser', upload.single('song')/*Multer Middleware*/, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.username;
    const telephone = req.body.telephone;
    const age = req.body.age;
    const file = req.file
    const result = await UploadPicturesToS3(file);
    hash_user_pic = result.key;
    console.log(result);
    // checkDuplicacy(username,email,telephone)?res.write("User with this credentials is already an user.Please Log in to your ID"):addUserToDb(username,password,email,telephone,hash_user_pic);
    createUser(username, age, password, email, result.Key)
    res.end("Added to DB");
})

module.exports = Router