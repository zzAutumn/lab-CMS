//  dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//  build express app
const app = express()
//  log generator
app.use(morgan('combine'))
//  process JSON data
app.use(bodyParser.json())
//  allow any host or client to access
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
