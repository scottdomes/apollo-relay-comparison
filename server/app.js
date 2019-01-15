import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

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
