const express = require('express')
const app = express()
let bodyParser = require('body-parser')
let Transaction = require('./app/models/transaction')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/BrollyAPI")

app.post('/transaction', function(req, res){
  let newTransaction = new Transaction(req.body)
  newTransaction.save().then(function(transaction){
    res.json ({ message: 'Success!', transaction})
  }).catch(function(err){
    res.status(400).send(err)
  })
})


let port = process.env.PORT || 8080
app.listen(port)
console.log('Youre on LH ' + port)

module.exports = app
