const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./graphql');

const app = express();

// GraphqQL server route
app.use(
  '/graphql',
  graphqlHTTP(req => ({
    schema,
    pretty: true
  }))
);

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
const server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
