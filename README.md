Slack Registration Page
=======================

This repo is used to create a signup portal for a Slack group using [SlackIn](https://github.com/rauchg/slackin).

## How To Configure

All configuration variables can be set using command line arguments,
variables, and rc files (in that order).

```
# cli parameters
node index.js --slackToken <slackToken> --slackSubDomain <subDomain> --refreshInterval <interval>

# env
slackRegistration_slackToken=<slackToken> slackRegistration_slackSubDomain=<subDomain> slackRegistration_refreshInterval=<interval>

# from ~/.slackRegistrationrc
slackToken=<slackToken>
slackSubDomain=<subDomain>
refreshInterval=<interval>
```

## Defaults

```
{
  slackToken: 'token',
  slackSubDomain: 'example',
  refreshInterval: 1000,
  port: 3000
}
```

## Want to create your own registration page?

Fork this repo and configure to your personal Slack!

## License
MIT
