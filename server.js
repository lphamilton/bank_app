const express = require('express')
const mysql = require ('mysql')
const bodyParser = require('body-parser');
const controllers = require('./database/controllers.js');

// create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bank'
})

// connect
db.connect((err) => {
  if(err) {
    throw err
  }
  console.log('MYSQL CONNECTED')
})

const app = express()
app.use( bodyParser.json() ); //everything that comes in will be parsed

app.get('/users/:userId/transactions', (req, res) => {
  const userId = req.params.userId
  const cback = (response) => res.send(response)

  controllers.getUserTransactions(userId, cback)
})

app.get('/users/:username', (req, res) => {
  const username = req.params.username
  const cback = (response) => res.send(response)

  controllers.getUserId(username, cback)
})

app.put('/users/:userId/recipient/:recipientId/amount/:amount/:balance', (req, res) => {
  const username = req.params.userId
  const receiver = req.params.recipientId
  const amount = req.params.amount
  const balance = req.params.balance

  const cback = (response) => res.send(response)

  controllers.transferUpdate(username, receiver, amount, balance, cback)
})


const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports.db = db;
