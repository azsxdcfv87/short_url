const express = require('express')
const exphbs = require('express-handlebars')

// const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', extname: '.handlebars' }))
app.set('view engine', 'handlebars')

// app.use(routes)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})