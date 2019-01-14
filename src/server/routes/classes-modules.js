const express = require('express')
const router = express.Router()
const sqlString = require('sqlstring')
const db = require('../config/db')
// --------------------------

router
  .get('/', getAllModulesWithClasses)
  .get('/:id', listclassesmodules)
  .get('/:id', getUserById)
  .post('/', createModule)
  .delete('/:id', deleteUser)
  .put('/:id', updateModule)
  .put('/:id', addtoclass)

// --------------------------
// GET all users
function getAllModulesWithClasses(req, res, next) {
  const sql = sqlString.format(`SELECT
    \`modules\`.\`id\`
    , \`classes_modules\`.\`classid\` AS \`group\`
    , \`modules\`.\`title\`
    , \`classes_modules\`.\`start_date\` AS \`start\`
    , \`classes_modules\`.\`end_date\` AS \`end\`
FROM
    \`classes_modules\`
    INNER JOIN \`modules\` 
        ON (\`classes_modules\`.\`moduleid\` = \`modules\`.\`id\`)`)
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}// --------------------------
// GET all users
function listclassesmodules(req, res, next) {
  const sql = sqlString.format('SELECT * FROM modules INNER JOIN classes_modules ON modules.moduleid = classes_modules.moduleid WHERE classes_modules.classid = ?', [req.params.id])
  db.execute(sql, (err, rows) => {
    if (err) return next(err)
    res.send(rows)
  })
}

// --------------------------
// CREATE a new user
function createModule(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

  db.execute(sql, (err, result) => {
    if (err) return next(err)
    res.send('New user added successfully')
  })
}

// --------------------------
// ADD a new module to class
function addtoclass(req, res, next) {
  const sql = sqlString.format(`INSERT INTO modules SET ?`, req.body)

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
function updateModule(req, res, next) {
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
