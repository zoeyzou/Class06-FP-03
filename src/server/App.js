const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
const authRouter = require('./auth/routes')
// eslint-disable-next-line no-unused-vars
const passportSetup = require('./auth/passport-setup')
const passport = require('passport')
const session = require('./config/session')
const clientRouter = require('./routes/client')
const apiRoutes = require('./routes')

const app = express()

app.use(session)

// Then we initialize passport and start the sessions.
app.use(passport.initialize())
app.use(passport.session())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/tahasoft', (req, res) => {
  res.send('tahasoft')
})
app.use('/api', apiRoutes)
app.use('/auth', authRouter.router)

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.json(err.message)
})

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../../build')))
  app.get('/*', (req, res) => {
    const indexPath = path.join(
      path.join(__dirname, '../../build'),
      'index.html'
    )
    res.sendFile(indexPath)
  })
}

module.exports = app
