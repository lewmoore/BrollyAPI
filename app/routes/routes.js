let mongoose = require('mongoose')
let Transaction = require('../models/transaction')
let data = require('../../data.js')

function addTransaction(req, res){
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
}

module.exports = { addTransaction}
