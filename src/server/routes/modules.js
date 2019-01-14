const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllModules)
  .get('/:id', getUserById)
  .post('/', createUser)
  .delete('/:id', deleteUser)
  .put('/:id', updateUser)

// --------------------------
// GET all modules
function listAllModules(req, res, next) {
  const sql = sqlString.format('SELECT * FROM modules')
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new user
function createUser(req, res, next) {
  const sql = sqlString.format(`INSERT INTO users SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New user added successfully')
  })
}

// --------------------------
// DELETE a user by ID (soft delete)
function deleteUser(req, res, next) {
  const sql = sqlString.format(`UPDATE users SET ? WHERE id = ?`, [
    {active: 0},
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'User not find'})
    res.send('User Deleted')
  })
}

// --------------------------
// UPDATE a user by ID
function updateUser(req, res, next) {
  const sql = sqlString.format(`UPDATE users SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'User not find'})
    res.send('User updated')
  })
}

// --------------------------
// GET one user by ID
function getUserById(req, res, next) {
  const sql = sqlString.format(
    'SELECT * FROM users WHERE id = ? AND status = ?',
    [req.params.id, "Active"]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'User not find'})
    res.send(rows[0])
  })
}

module.exports = router
