//  dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//  build express app
const app = express()
//  log generator
app.use(morgan('combined'))
//  process JSON data
app.use(bodyParser.json())
//  allow any host or client to access
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email} your user has registered! `
    //  message: 'hello'
  })
})

app.listen(process.env.PORT || 8081)
