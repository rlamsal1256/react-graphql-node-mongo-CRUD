const { connectToDB } = require('./utils/database');
const logger = require('./utils/logger');
const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 4000;

connectToDB()
  .then(() => app().listen(port, () => logger.info(`🚀  Server running on port ${port}`)))
  .catch(err => logger.error('Error starting server: ', err));
