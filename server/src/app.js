//  dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

//  build express app
const app = express()
//  log generator
app.use(morgan('combined'))
//  process JSON data
app.use(bodyParser.json())
//  allow any host or client to access
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    //  app.listen(process.env.PORT || 8081)
    console.log(`Server is running on ${config.port}`)
  })
