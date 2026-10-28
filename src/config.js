const pkg = require('../package.json');

module.exports = {
  appName: process.env.APP_NAME || 'LeadBoard — Deployment Validation',
  version: pkg.version,
  port: Number(process.env.PORT) || 3000,
  host: '0.0.0.0'
};
