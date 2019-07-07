const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers/resolvers');

const create = () => {
  const isProduction = process.env.APP_ENV && process.env.APP_ENV === 'production';
  const typeDefs = importSchema('src/schemas/schema.graphql');

  return new ApolloServer({
    typeDefs,
    resolvers,
    ...(!isProduction && {
      playground: true,
      introspection: true,
    }),
  });
};

module.exports = create;
