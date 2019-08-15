const express = require('express')
const mysql = require ('mysql')

// create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
})

// connect
db.connect((err) => {
  if(err) {
    throw err
  }
  console.log('MYSQL CONNECTED')
})

const app = express()

// create db

app.get('/createdb', (req, res)=> {
  let sql = 'SHOW DATABASES'
  db.query(sql, (err, result) => {
    if(err) {
      throw err
    }
    console.log(result)
    res.send('showing db')
  })
})

// mysql --host=localhost --user=root  -e "schema.sql"


const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
