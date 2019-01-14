exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_modules').insert(
        [
          {
            "classid": 1,
            "moduleid": 1,
            "start_date": "2019-01-01",
            "end_date": "2019-02-01"
          },
          {
            "classid": 1,
            "moduleid": 2,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "classid": 1,
            "moduleid": 3,
            "start_date": "2019-03-01",
            "end_date": "2019-03-01"
          },
          {
            "classid": 1,
            "moduleid": 4,
            "start_date": "2019-03-01",
            "end_date": "2019-04-01"
          },
          {
            "classid": 2,
            "moduleid": 1,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "classid": 2,
            "moduleid": 2,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "classid": 2,
            "moduleid": 3,
            "start_date": "2019-03-01",
            "end_date": "2019-04-01"
          },
          {
            "classid": 2,
            "moduleid": 4,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "classid": 2,
            "moduleid": 5,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "classid": 3,
            "moduleid": 1,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "classid": 3,
            "moduleid": 2,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "classid": 3,
            "moduleid": 4,
            "start_date": "2019-06-01",
            "end_date": "2019-07-01"
          },
          {
            "classid": 4,
            "moduleid": 1,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "classid": 4,
            "moduleid": 2,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "classid": 4,
            "moduleid": 3,
            "start_date": "2019-06-01",
            "end_date": "2019-07-01"
          },
          {
            "classid": 4,
            "moduleid": 4,
            "start_date": "2019-07-01",
            "end_date": "2019-08-01"
          }
        ]
      )
    })
}



