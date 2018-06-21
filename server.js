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
  newTransaction.save(function(err, transaction){
    if (err) {
      res.send(err)
    } else {
      res.json ({ message: 'Success!', transaction})
    }
  })
})


let port = process.env.PORT || 8080
app.listen(port)
console.log('Youre on LH ' + port)

module.exports = app
