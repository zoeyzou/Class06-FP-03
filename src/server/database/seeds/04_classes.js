exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(() => knex('classes_modules').del())

    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "id": 1,
          "classname": "Class 1",
          "active": false
        },
        {
          "id": 2,
          "classname": "Class 2",
          "active": false
        },
        {
          "id": 3,
          "classname": "Class 3",
          "active": false
        },
        {
          "id": 4,
          "classname": "Class 4",
          "active": false
        },
        {
          "id": 5,
          "classname": "Class 5",
          "active": false
        },
        {
          "id": 6,
          "classname": "Class 6",
          "active": true
        },
        {
          "id": 7,
          "classname": "Class 7",
          "active": true
        },
        {
          "id": 8,
          "classname": "Class 8",
          "active": true
        },
        {
          "id": 9,
          "classname": "Class 9",
          "active": true
        },
        {
          "id": 10,
          "classname": "Class 10",
          "active": true
        },
        {
          "id": 11,
          "classname": "Class 11",
          "active": true
        }])
    })
}
