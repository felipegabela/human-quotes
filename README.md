# human-quotes

API for human quotes and inspirational phrases.

## Local Node.js Development w/ Docker

In order to run Human Quotes API, the following components and services need to be available and running. This
includes:

- Human Quotes Node.js application to serve web requests
- MongoDB to store application data

Using [Docker Compose](https://docs.docker.com/compose/), these application dependencies can be easily
started and stopped, without the need to specifically install anything. Each application component runs
inside of its own Docker container, under a network mesh that Docker wires together by default.

The Node.js code is volume mounted to the `human-quotes` container, which allows for real-time application code
changes without the need to build new containers or restart services

## MongoDB credentials

Set/export the following environment variables:
`MONGO_INITDB_ROOT_USERNAME`
`MONGO_INITDB_ROOT_PASSWORD`

# Start all services

```bash
cd docker
docker-compose up
```

# Stop all services

```bash
CTRL + C
docker-compose down
```

## Help

`localhost:3000` - API general information
`localhost:8081` - Web-based MongoDB admin interface

## to-do list

- Use a proper logging tool (i.e. Winston, Buyan, Pino)
- Add Mocha/Jest for testing
- CI/CD with GitActions or Jenkins
- Add a code coverage tool to track untested code (i.e. Istanbul/NYC)
- Look into DI/IOC frameworks (node-dependency-injection)
- Setup database (SQL or NoSQL)
- Schema validator (OpenAPISchema Validator / Joi)
- Define resources and endpoints
- Look into express mounted routers
- Maybe TDD to create endpoints controllers
- Setup Swagger
- Add authentication through JWT initially (maybe Passport)
- Expose API in AWS cloud
- Populate database with quotes
- Write a decent readme file
- Prettier
- Build scripts
- Seeding, migrations
- Better error handling
- Fix eslint .js problems
- CodeArtifact or JFrog
- Add caching
- Fastify vs Express
- Production best practices for docker and express/fastify
- Containerize node js app (https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
- Synk CLI & npm audit
- real-time application code
  changes without the need to build new containers or restart services
- Add data persistency
- MongoDB docker image or Mongo Cloud
