const express = require('express')
const path = require ('path')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes')
const connectdb = require('./utils/db')
const bodyParser = require('body-parser')

require('dotenv').config()
console.log('hello',process.env);

connectdb()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/admin/*', (req, res) => {
  res.send('Hello World!')
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})   