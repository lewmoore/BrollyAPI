const express = require('express')
const app = express()
let bodyParser = require('body-parser')
let Transaction = require('./app/models/transaction')
let data = require('./data')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/BrollyAPI")

let router = express.Router()
let transaction = require('./app/routes/routes')

app.route('/transaction')
  .post(transaction.addTransaction)


let port = process.env.PORT || 8080
app.listen(port)
console.log('Youre on LH ' + port)

module.exports = app
