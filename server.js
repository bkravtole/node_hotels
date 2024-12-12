// let fs = require('fs');
// let os = require('os');

//  let user = os.userInfo();
//  console.log(user);
//  fs.appendFile('greeting.txt', "hello user \n " , () => {console.log("file created ");
//  });

// let note = require('./notes')
// console.log(note.age , note.friend);
// console.log(note.func(note.age+12 , 12))

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./db");
// Middleware to parse incoming JSON data
app.use(bodyParser.json());

const personRouter  = require("./routes/personRoutes")
const menuRouter = require("./routes/menuRoutes")
// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/person' , personRouter)
app.use('/menu' , menuRouter )
// Routes
app.get("/", function (req, res) {
  res.send("Hey Bharat, welcome to our server");
});

app.get("/bharat", (req, res) => {
  res.send("Hey Bharat, this is your directory");
});


