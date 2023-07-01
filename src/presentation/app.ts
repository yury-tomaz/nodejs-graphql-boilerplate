import { ApolloServer } from '@apollo/server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const app = new ApolloServer({
    typeDefs,
    resolvers,
});

export {app}
