const express = require('express')
const app = express()
let bodyParser = require('body-parser')
let Transaction = require('./app/models/transaction')
let data = require('./data')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/BrollyAPI")

app.post('/transaction', (req, res) => {
  console.log(req.body)
  let newTransaction = new Transaction(req.body)
  data.map((element) => {
    if(element.phone == req.body.device) {
      newTransaction.save().then((transaction) => {
        res.json ({ message: 'Success!', transaction})
      }).catch((err) => {
        res.status(400).send(err)
      })
    }
  })

})


let port = process.env.PORT || 8080
app.listen(port)
console.log('Youre on LH ' + port)

module.exports = app
