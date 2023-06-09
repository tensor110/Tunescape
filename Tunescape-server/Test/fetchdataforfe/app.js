const express = require('express');
const app = express();
const PORT = 6969;
app.set("views","views")
app.set("view engine", "ejs")
app.get('/', (req, res) => {
    res.render("page.ejs",{count:69})
})

app.listen(8080,()=>{
    console.log("Running @8080")
})