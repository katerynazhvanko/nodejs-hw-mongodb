import setupServer from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const connection = async () => {
  await initMongoConnection();
  setupServer();
};

connection();
