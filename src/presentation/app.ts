import { ApolloServer } from '@apollo/server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const app = new ApolloServer({
 typeDefs,
 resolvers,
});

export { app }
