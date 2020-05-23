const express     = require('express')
const bodyParser  = require('body-parser')
const path        = require('path')
const chalk       = require('chalk')

// Imports
const router      = require('./router/index')

const app = express()

// Parser
app.use(bodyParser.urlencoded({ extended: true }))
// Public path
app.use(express.static(path.join(__dirname + '/public')))

// EJS template engine
app.set('render engine', 'ejs')
app.set('views', 'view')

// Routers
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(chalk.green.inverse(' Server running... ')))
