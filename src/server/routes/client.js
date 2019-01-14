const express = require('express')
const router = express.Router()
const path = require('path')

// Handle React routing, return all requests to React app
router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

module.exports = router
