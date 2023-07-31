# appsync-poc-backend

## Setup of project

- create new repo in github
- clone repo
- add package json
  `$ npm init -y `
- add "private": true to package.json
- add serverless as dev dependency
  `$ npm i --save-dev serverless`
- add serverless script to package.json

```
  "scripts": {
    "sls": "sls"
  }
```

- create new serverless project
  `$ npm run sls -- create -t aws-nodejs`

- remove comments from serverless.yml
- install aws-sam-cli
  `$ brew install aws-sam-cli`
- install following plugins as dev dependencies
  `$npm i --save-dev serverless-appsync-plugin serverless-plugin-typescript`
- install following packages as dev dependencies
  `$npm i --save-dev aws-sdk`
- install chance
  `$npm i  chance`

```
plugins:
  - serverless-appsync-plugin
  - serverless-plugin-typescript
```

## Commands

Deploy the serverless stack
`$ npm run sls -- deploy`
