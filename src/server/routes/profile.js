const router = require('express').Router()
const authRouter = require('../auth/routes')

// --------------------------
/*
 * Here we check the cookie if the cookie is valid with the middleware we wrote,
 * them we send the information back if it's vaild and we send nothing back if it's not.
 * we could send back json with information that the request was invalid if we wanted to
 * do anything in react to display this.
 */
router.post('/', authRouter.authCheck, (req, res) => {
  res.send(req.user)
})

module.exports = router
