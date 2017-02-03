#About

This a simple Node.js based mock server to test the [bookingAPI](api/swagger/swagger.yaml). The mock implementation is intended for fast protoyping and to get the API right (Getting APIs right is *hard*).

To get the API right, a small web application is provided (we are drinking our own champagne).

Once the API is right, the API will be implemented of SBB's distribution system and provided by a simple to access API Management tool. More to come...

## Installing
The easiest way is to pull the docker image:

```bash
docker pull schlpbch/bookingAPI
```
The latest docker image is always available at https://hub.docker.com/schlpbch/bookingAPI.

## Running
The easiest way is to run the docker image:

```bash
  docker pull schlpbch/bookingapi
  docker run -d -p 80:8080 --name bookingapi-mock schlpbch/bookingapi
```

or start with

```bash
  nodejs app.js
```
The web app and the API are running at http://localhost:8080/

## Live App and Documentation

The Web App is available at:

- [http://api.sbb.ch/app/](http://api.sbb.ch/app/)

Thanks to **SwaggerUI** the up-to-date documentation is always available at:

- [http://api.sbb.ch/docs/](http://api.sbb.ch/docs/)

and the latest JSON can be accessed at:

- [http://api.sbb.ch/api-docs/](http://api.sbb.ch/api-docs/)


## Developing
First, **Nodejs** and **npm** which comes with it is needed. Then to install all the modules, simply run:

```bash
  npm install
```

This will install the package defined in [package.json](package.json) file.

To edit the API interactively, do:

```bash
  swagger project edit
```

The browser will then provide you with tab to edit the specification.

To run Swagger in mock mode, start with:


```bash
  swagger project start -m
```

To run the tests:


```bash
  swagger project test
```

To run the *mock* server, do:


```bash
  swagger project start
```

or more simple:

```bash
  node app.js
```

To run the *mock* server as docker container, do:

```bash
  docker build .
  docker run -d -p 8080:8080 --name api-mock-srv <containerId>
```

## ToDo
- Translate API to English
- Integrate [Swagger Middleware](https://github.com/BigstickCarpet/swagger-express-middleware/blob/master/docs/samples/walkthrough2.md) to easily pre-populate data
- Get the API right
 - Expose journey planning as a route of its own
- Complete wiring Wep App with API
- Clarify legalese
- Setup API Management
- Setup Security (JWT)

## Done
- <del>Write a client to verify the usability of the API (APIs are UIs for developers).</del>
- <del>Align with Fahrplan team</del>
- <del>Align with Open Data (better Open API) team<del>
