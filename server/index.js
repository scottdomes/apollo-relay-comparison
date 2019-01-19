const express = require('express');
const graphqlHTTP = require('express-graphql');
const MongoClient = require('mongodb').MongoClient;

const schema = require('./graphql');

const app = express();

const db = MongoClient.connect('mongodb://localhost/graphql');

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

// GraphqQL server route
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

// Connect mongo database

// start server
const server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
