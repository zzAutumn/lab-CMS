const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8081
const cors = require('cors')

//  models
User = require('./models/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

mongoose.Promise = global.Promise
const DB_URL = 'mongodb://yezi:yezi@ds227740.mlab.com:27740/lab-cms'
mongoose.connect(DB_URL)
var db = mongoose.connection
db.on('connected', function () {
  console.log('mongoose connection to ' + DB_URL)
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const routes = require('./routes/userListRoutes')
routes(app)

const testRoutes = require('./routes/test')
testRoutes(app)

app.listen(port)

console.log(`server is listening on port ${port}...`)