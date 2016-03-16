const RunCommands = require('rc')

module.exports = RunCommands('slackRegistration', {
  slackToken: 'token',
  slackSubDomain: 'example',
  refreshInterval: 1000,
  port: 3000
})
