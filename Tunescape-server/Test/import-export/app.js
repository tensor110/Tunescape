const express=require('express');

const app=express();

app.get('/music',(req,res)=>{
    res.send([{
        title: "As it was",
        artist: "Harry Styles",
        plays: 20,
        hash : "2c0dcdda6b7fb68330c50257acb4c735",
      },
      {
        title: "Suzume",
        artist: "Still dk",
        plays: 69,
        hash : "13c77c5cb8243d034ca702c5b476a8da",
      },
      {
        title: "Dil ibbadat",
        artist: "KK",
        plays: 612,
        hash : "062eb117d277e65c5c7c6cb5527062a3",
      },
      {
        title: "Suzume-again",
        artist: "fourth one",
        plays: 169,
        hash : "603b38f1c76772d94e1d1a521280aeea",
      }])
})

app.listen(3040,()=>{console.log("3040")})

// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON request bodies
// app.use(express.json());

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })

// // API endpoint to update the array
// app.post('/updateArray', (req, res) => {
//   const newData = req.body;
//   window.array = newData; // Update the array with the received data
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
