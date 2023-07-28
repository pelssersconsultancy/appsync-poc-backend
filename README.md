# appsync-poc-backend

## Setup of project

- create new repo in github
- clone repo
- add package json
  `$ npm init -y `
- add "private": true to package.json
- add serverless as dev dependency
  `$ npm i --save-dev serverless@2.4.0`
  !! Use 2.4.0 for now because 2.5.0 breaks serverless-iam-roles-per-function
- add serverless script to package.json

```
  "scripts": {
    "sls": "sls"
  }
```

- create new serverless project
  `$ npm run sls -- create -t aws-nodejs`

- remove comments from serverless.yml
  \*install the serverless-appsync-plugin (https://github.com/sid88in/serverless-appsync-plugin) and configure it in serverless.yml
  `$npm i --save-dev serverless-appsync-plugin `

```
plugins:
  - serverless-appsync-plugin
```

## Commands

Deploy the serverless stack
`$ npm run sls -- deploy`
