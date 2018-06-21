const express = require('express')
const app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/BrollyAPI")


let port = process.env.PORT || 8080
app.listen(port)
console.log('Youre on LH ' + port)

module.exports = app
