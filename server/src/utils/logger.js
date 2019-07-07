const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  silent: process.env.LOGGING_LEVEL === 'off',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console({
      level: process.env.LOGGING_LEVEL,
      stderrLevels: ['error'],
      consoleWarnLevels: ['warn'],
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
