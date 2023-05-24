const express=require('express');
const app=express();
const multer =require('multer')
const ejs=require('ejs');
app.use(express.static(__dirname+'Server-Frontend/public'));

const PORT=6969;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const upload=multer({dest:'uploads/'})
app.set("view engine","ejs");
app.set("views","Server-Frontend")
let {uploadToS3,downloadfromS3} =require('./Middleware/s3-modules');

app.get('/',(req,res)=>{
    res.render('addPage.ejs');
})

app.post('/addsong', upload.single('song')/*Multer Middleware*/ , async (req, res) => {
  const file = req.file
  console.log(file)
//   res.send({imagePath: `/images/${result.Key}`})
  const result =await uploadToS3(file)
  console.log(result);
  res.end("Posted Successfully")
})


app.listen(PORT||process.env.PORT,()=>{
    console.log(`App live @ :http://localhost:${PORT} `)
})





