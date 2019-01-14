exports.seed = (knex, Promise) =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          name: 'Christopher Klüter',
          type: 'Director',
          role_id: 1,
          email: 'christopher@hackyourfuture.net',
          linkedin:
            'https://www.linkedin.com/in/christopher-kl%C3%BCter-26794643/',
          avatar: 'https://imgur.com/Lj29FDP.jpg'
        },
        {
          name: 'Marie Hoff',
          type: 'Public Affairs',
          role_id: 1,
          email: 'marie@hackyourfuture.net',
          linkedin: 'https://www.linkedin.com/in/marie-hoff/',
          avatar: 'https://imgur.com/sK7RHV4.jpg'
        },
        {
          name: 'Benjamin Dalsgaard Hughes',
          type: 'Educational director',
          role_id: 1,
          avatar: 'https://i.imgur.com/HC4l4na.jpg',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Alicia Gonzales',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/CpK28fb.png',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Zaki Wasik',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/dMhbTTP.jpg',
          linkedin: 'https://www.linkedin.com/in/zakiwasik/',
          github_username: 'zkwsk'
        },
        {
          name: 'Rohit Sharma',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/m8L1xEn.jpg',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Rasmus Jones',
          type: 'mentor',
          role_id: 2,
          avatar:
            'https://www.dtu.dk/gimage.ashx?i=VHJ1ZV9ffHxfX2h0dHBzOi8vd3d3LmR0dWJhc2VuLmR0dS5kay9zaG93aW1hZ2UuYXNweD9pZD03OTUxNl9ffHxfXzEwM19ffHxfXzE0MF9ffHxfX1RydWVfX3x8X19GYWxzZV9ffHxfX0ZhbHNlX198fF9fMF9ffHxfX19ffHxfXzA_:_3d',
          linkedin: 'https://www.linkedin.com/in/rasmus-jones-b4552480/',
          github_username: 'Rassibassi'
        },
        {
          name: 'Pachito Marco Calabrese',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://avatars1.githubusercontent.com/u/1509241?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/pmcalabrese/',
          github_username: 'pmcalabrese/'
        },
        {
          name: 'Martin Clemmensen',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/8hJo6Sp.jpg',
          linkedin: 'https://www.linkedin.com/in/martinclemmensen/',
          github_username: 'mclemme'
        },
        {
          name: 'Marta Matos',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/rq6WNi2.jpg',
          linkedin: 'https://www.linkedin.com/in/marta-matos-829a7050/',
          github_username: 'martamatos'
        },
        {
          name: 'Nynne Just Christofferson',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/EwbPr66.jpg',
          linkedin:
            'https://www.linkedin.com/in/nynne-just-christoffersen-0361a316/',
          github_username: 'nynnejc'
        },
        {
          name: 'Pankaj Kumar Singh',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://avatars0.githubusercontent.com/u/432980?s=460&v=4',
          linkedin: 'https://dk.linkedin.com/in/pankaj28843',
          github_username: 'pankaj28843/'
        },
        {
          name: 'Svetlana Galkina',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/nTxq371.jpg',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Jacob Andresen',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://avatars0.githubusercontent.com/u/15238?s=400&v=4',
          linkedin: 'https://www.linkedin.com/in/jacobandresen/',
          github_username: 'jacobandresen'
        },
        {
          name: 'Kevin Simper',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/quTEcgF.png',
          linkedin: 'https://www.linkedin.com/in/kevinsimper/',
          github_username: 'kevinsimper'
        },
        {
          name: 'Younes Meliani',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/raR78e5.png',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Fehime Seven',
          type: 'mentor',
          role_id: 2,
          avatar: '',
          linkedin: '',
          github_username: ''
        },
        {
          name: 'Moritz Beber',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/1x0oWRJ.jpg',
          linkedin: 'https://www.linkedin.com/in/moritz-beber-b597a55a/',
          github_username: 'Midnighter'
        },
        {
          name: 'Abed Sujan',
          type: 'mentor',
          role_id: 2,
          avatar:
            'https://secure.gravatar.com/avatar/678b0439a52359c99d1ed00b9a019ad7?size=400',
          linkedin: 'https://www.linkedin.com/in/abedsujan/',
          github_username: ''
        },
        {
          name: 'Jakub Cioslowski',
          type: 'mentor',
          role_id: 2,
          avatar: '',
          linkedin: '',
          github_username: 'jakub-c/'
        },
        {
          name: 'Ahmed Magdy',
          type: 'mentor',
          role_id: 2,
          avatar:
            'https://avatars1.githubusercontent.com/u/14139855?s=400&u=b070e4c61cab4383c2868400aadb7bf5de3fa45d&v=4',
          linkedin: 'https://www.linkedin.com/in/a-magdy/',
          github_username: 'a-magdy'
        },
        {
          name: 'Petru Catana',
          type: 'mentor',
          role_id: 2,
          avatar:
            'https://media.licdn.com/dms/image/C4D03AQEsK5ZbI2RS0A/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=jfoeICLCmitXtEg3Im66bYluNNy9p-I3ldtVY98sTsw',
          linkedin: 'https://www.linkedin.com/in/petru-catana-3151a268/',
          github_username: 'pcatana'
        },
        {
          name: 'Mikael Wistoft-Ibsen',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://i.imgur.com/9kJRICy.png',
          linkedin: '',
          github_username: 'wistoft'
        },
        {
          name: 'Emil Bay',
          type: 'mentor',
          role_id: 2,
          avatar: 'https://avatars2.githubusercontent.com/u/416524?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/emilbayes/',
          github_username: 'emilbayes'
        },
        {
          type: 'alumni',
          role_id: 2,
          name: 'Katsisaac50',
          email: 'katsisaac50@gmail.com',
          avatar: '1.jpg'
        },
        {
          type: 'alumni',
          role_id: 2,
          name: 'Hala Kasim',
          email: 'halakasim16@gmail.com',
          avatar: '2.jpg'
        },
        {
          type: 'alumni',
          role_id: 2,
          name: 'Rufaida Jumaa',
          email: 'eng.rufaidajumaa@gmail.com',
          avatar: ''
        },
        {
          type: 'alumni',
          role_id: 2,
          name: 'Mohammed Abd',
          email: 'moha.abd.99@gmail.com',
          avatar: '3.jpg'
        },
        {
          type: 'alumni',
          role_id: 2,
          name: 'Richard Paredes',
          email: 'chard.paredes@gmail.com',
          avatar: '4.jpg'
        },

        {
          avatar: 'https://avatars0.githubusercontent.com/u/38817334?v=4',
          name: null,
          type: 'User',
          role_id: 2,
          github_username: 'marcodca',
          github_token: '38817334'
        },
        {
          avatar: 'https://avatars1.githubusercontent.com/u/19361362?v=4',
          name: null,
          type: 'User',
          role_id: 2,
          github_username: 'T1ish',
          github_token: '19361362'
        },
        {
          avatar: 'https://avatars1.githubusercontent.com/u/955233?v=4',
          name: 'Zuhair Taha',
          type: 'User',
          role_id: 3,
          github_username: 'zuhairtaha',
          github_token: '955233'
        },
        {
          name: 'Ibrahim Kadoura Mater',
          avatar: 'https://avatars3.githubusercontent.com/u/32614855?v=4',
          github_username: 'ibrsal',
          github_token: '32614855',
          role_id: 3
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/29578565?v=4',
          name: 'Joe (Yousof)',
          type: 'User',
          role_id: 3,
          github_username: 'YousofMersal',
          github_token: '29578565'
        }
      ])
    )
