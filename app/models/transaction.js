let mongoose = require('mongoose')
let Schema = mongoose.Schema

let TransactionSchema = new Schema ({
  device: { type: String, required: true },
  premium: { type: Number, required: true },
  cardNumber: { type: Number, required: true },
  expiryDate: { type: Number, required: true },
  cvv: { type: Number, required: true }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
