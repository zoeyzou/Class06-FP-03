const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', listAllclasses)
  .get('/:id', getclasseById)
  .post('/', createclasse)
  .delete('/:id', deleteclasse)
  .put('/:id', updateclasse)

// --------------------------
// GET all classes
function listAllclasses(req, res, next) {
  const sql = sqlString.format('SELECT * FROM classes')
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new classe
function createclasse(req, res, next) {
  const sql = sqlString.format(`INSERT INTO classes SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New classe added successfully')
  })
}

// --------------------------
// DELETE a classe by ID (soft delete)
function deleteclasse(req, res, next) {
  const sql = sqlString.format(`UPDATE classes SET ? WHERE classid = ?`, [
    {active: 0},
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'classe not find'})
    res.send('classe Deleted')
  })
}

// --------------------------
// UPDATE a classe by ID
function updateclasse(req, res, next) {
  const sql = sqlString.format(`UPDATE classes SET ? WHERE id = ?`, [
    req.body,
    req.params.id
  ])

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    if (!result.affectedRows) return next({message: 'classe not find'})
    res.send('classe updated')
  })
}

// --------------------------
// GET one classe by ID
function getclasseById(req, res, next) {
  const sql = sqlString.format(
    'SELECT * FROM classes WHERE id = ? AND status = ?',
    [req.params.id, "Active"]
  )
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    if (rows.length === 0) return next({message: 'classe not find'})
    res.send(rows[0])
  })
}

module.exports = router
