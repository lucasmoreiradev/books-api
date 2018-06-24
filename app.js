const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/', router)

module.exports = app
