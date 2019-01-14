const cookieSession = require('cookie-session')

const session= cookieSession({
  maxAge: 7 * 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
})

module.exports = session