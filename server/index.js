const express = require('express');
const graphqlHTTP = require('express-graphql');
const MongoClient = require('mongodb').MongoClient;

const schema = require('./graphql');

const app = express();

MongoClient.connect(
  'mongodb://localhost/graphql',
  (err, database) => {
    if (err) return console.log(err);
    const db = database.db('graphql');

    app.use('/graphql', function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With'
      );
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
        next();
      }
    });

    app.use(
      '/graphql',
      graphqlHTTP(async req => ({
        schema,
        pretty: true,
        context: {
          mongodb: await db
        }
      }))
    );

    // Make sure you add the database name and not the collection name
    const server = app.listen(8080, () => {
      console.log('Listening at port', server.address().port);
    });
  }
);
