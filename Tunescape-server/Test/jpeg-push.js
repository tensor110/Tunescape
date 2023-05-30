const express = require('express');
const app = express();
const multer = require('multer')
const ejs = require('ejs');
app.use(express.static(__dirname + '../Server-Frontend/public'));
const PORT = 6969;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({ dest: 'uploads-test/' })
app.set("view engine", "ejs");
app.set("views", "test-jpeg")
let { uploadMusicToS3, downloadfromS3 ,UploadPicturesToS3} = require('../Middleware/s3-modules');
let { addItem, searchItem, editItem, removeItem } = require('../Middleware/musicManager')
let { userAuthenticator,addUserToDb ,checkDuplicacy} = require('../Middleware/userManager');
let image_hash;

app.get('/',(req,res)=>{
    res.render("uploadImage.ejs");
})

app.post('/postimage',upload.single('picture'),async(req,res)=>{
    const image=req.file;
    console.log(image)
    const result= await UploadPicturesToS3(image);
    console.log(result);
    image_hash=result.Key;
    res.end("<a href='/getImage'>Image Uploaded to S3.Click here to Fetch it back via Cloudfront!</a>");
})

app.get('/getImage',(req,res)=>{
    res.render("showimage.ejs",{src:`https://d1uzpajnrcv6ws.cloudfront.net/${image_hash}`});
})




//ROUTES
app.listen(8080,()=>{console.log("localhost:8080")})