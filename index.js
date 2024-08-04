// console.log("hey nik");
const express = require('express')
const app = express()
require('dotenv').config()
// const dotenv = require('dotenv').config()
// const envApp = dotenv() ye galat hai, aisa nhi kr skte hai
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello Anand!')
})

// we send a get request at "/nik". this sends an o/p : "resilientnik18" at port 3000 from where we sent the request.
app.get('/nik', (req, res) => {
    res.send("resilientnik18");
})

app.get("/anand", function(req, res){
    // res.send("nikhil__anand");
    res.send("<h1>nikhil_anand</h1>");
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })