const Slackin = require('slackin')

const Config = require('./config')
const Port = process.env.PORT || Config.port

Slackin.default({
  token: Config.slackToken,
  interval: Number(Config.refreshInterval),
  org: Config.slackSubDomain,
  path: '/',
  silent: false
}).listen(Number(Port))
