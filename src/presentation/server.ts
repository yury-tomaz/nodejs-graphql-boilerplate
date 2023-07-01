import { startStandaloneServer } from '@apollo/server/standalone';
import { app } from './app';

(async () => {
  const {url} = await startStandaloneServer(app, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})()


