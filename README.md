#About

This a simple Node.js based mock server to test the [bookingAPI](api/swagger/swagger.yaml). The mock implementation is intended for fast protoyping and to get the API right (Getting APIs right is *hard*).

To get the API right, a small web application is provided (we are drinking our own champagne).

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
The web app is running at http://localhost:8080/

API resources are then available at  http://localhost:8080/<resource>


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

or simplier:

```bash
  node app.js
```

To run the *mock* server as docker container, do:

```bash
  docker build .
  docker run -d -p 8080:8080 --name api-mock-srv <containerId>
```

## ToDo
- Get the API right
- Complete wiring Wep App with API
- Clarify legalese
- Setup API Management
- Setup OAuth2

## Done
- <del>Write a client to verify the usability of the API (APIs are UIs for developers).</del>
- <del>Align with Fahrplan team</del>
- <del>Align with Open Data (better Open API) team<del>
