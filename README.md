[![Build Status](https://travis-ci.org/schlpbch/bookingAPI.svg?branch=master)](https://travis-ci.org/schlpbch/bookingAPI)
[![](https://images.microbadger.com/badges/image/schlpbch/bookingapi.svg)](https://microbadger.com/images/schlpbch/bookingapi "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/schlpbch/bookingapi.svg)](https://microbadger.com/images/schlpbch/bookingapi "Get your own version badge on microbadger.com")
[![](https://images.microbadger.com/badges/commit/schlpbch/bookingapi.svg)](https://microbadger.com/images/schlpbch/bookingapi "Get your own commit badge on microbadger.com")

## About

This a simple Node.js based mock server to test the [bookingAPI](api/swagger/swagger.yaml). The mock implementation is intended for fast protoyping and to get the API right (Getting APIs right is *hard*).

To get the API right, a small web application is provided (we are drinking our own champagne).

Once the API is right, the API will be implemented of SBB's distribution system and provided by a simple to access API Management tool. Here is an example of how it might look like:

- [booking API (Mock)](https://bookingapi.3scale.net/)

More to come...

## Installing
The easiest way is to pull the docker image:

```bash
docker pull schlpbch/bookingapi
```
The latest docker image is always available at https://hub.docker.com/r/schlpbch/bookingapi/.

## Running the Mock Server
The easiest way is to run the docker image:

```bash
  docker pull schlpbch/bookingapi
  docker run -d -p 80:8080 --name bookingapi-mock schlpbch/bookingapi
```

or start with

```bash
  node app.js
```

The web app and the API are then running at http://localhost/

## Running the Mock Server with NGINX Firewall

Using [docker-compose](https://docs.docker.com/compose/) a software defined
firewall (see [NGINX](https://www.nginx.com/))
is added in front of the mocked server and is linked to the mock server
server using a software defined  network. This allows us to test
authentication methods using JSON Web Tokens (JWT) later.

See [docker-compose.yml](docker-compose.yml) for details.

To start simply us

```bash
  docker-compose up
```

The server uses self signed certificates, must be replaced
with real ones for production!

## Live App and Documentation

The Web App is available at:

- [http://api.sbb.ch/app/](http://api.sbb.ch/app/)

Thanks to **SwaggerUI** the up-to-date documentation is always available at:

- [http://api.sbb.ch/docs/](http://api.sbb.ch/docs/)

and the latest JSON can be accessed at:

- [http://api.sbb.ch/api-docs](http://api.sbb.ch/api-docs)

Developing
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
  npm run dev
```

`npm run dev` runs the the express app. It also creates a bundle for the
front-end part. This bundle includes source maps for debugging.

*To run the app in production* please run the following command
```bash
  npm run prod
```
which minifies the bundle and excludes source maps as we do not
want to deliver our code in plain text.

To run the *mock* server as docker container, do:

```bash
  docker build .
  docker run -d -p 8080:8080 --name api-mock-srv <containerId>
```

## ToDo
- Integrate [Swagger Middleware](https://github.com/BigstickCarpet/swagger-express-middleware/blob/master/docs/samples/walkthrough2.md) to easily pre-populate data
- Get the API right
 - Expose journey planning as a route of its own
- Clarify legalese
- Setup API Management
- Setup Security (JSON Web Token)

## Done
- <del>Align with FSM specification</del>
- <del>Complete wiring Wep App with API</del>
- <del>Translate API to English</del>
- <del>Write a client to verify the usability of the API (APIs are UIs for developers).</del>
- <del>Align with Fahrplan team</del>
- <del>Align with Open Data (better Open API) team<del>
