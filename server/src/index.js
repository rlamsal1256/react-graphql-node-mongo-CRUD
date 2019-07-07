const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const resolvers = require('./resolvers/resolvers');
const { connectToDB } = require('./utils/database');
const logger = require('./utils/logger');

require('dotenv').config();

const typeDefs = importSchema('src/schemas/schema.graphql');

const isProduction = process.env.APP_ENV && process.env.APP_ENV === 'production';

const app = new ApolloServer({
  typeDefs,
  resolvers,
  ...(!isProduction && {
    playground: true,
    introspection: true,
  }),
});

const port = process.env.PORT || 4000;

connectToDB()
  .then(() => app.listen(port, () => logger.info(`🚀  Server running on port ${port}`)))
  .catch(err => logger.error('Error starting server: ', err));
