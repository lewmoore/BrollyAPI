let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Transaction', () => {
  it('should post a transaction', (done) => {
    let transaction = {
      device: 'iPhone X 64GB',
      premium: 50.42,
      cardNumber: 123456789,
      expiryDate: 1201,
      cvv: 123
    }
    chai.request(server)
    .post('/transaction')
    .send(transaction)
    .end((err, res) => {
      res.should.have.status(200)
      res.text.should.contain('Success!')
    })
    done()
  })

  it('should error if given incorrect data', () => {
    let transaction = {
      device: 'iPhone X 64GB',
      premium: 50.42,
      cvv: 123
    }
    chai.request(server)
    .post('/transaction')
    .send(transaction)
    .end((err, res) => {
      res.should.have.status(400)
      res.body.should.have.property('errors')
      res.body.errors.should.have.property('cardNumber')
      res.body.errors.should.have.property('expiryDate')
    })
  })
})
