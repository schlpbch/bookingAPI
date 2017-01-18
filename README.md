#About

This a simple Node.js based mock server to test the [bookingAPI](api/swagger/swagger.yaml). The mock implementation is intended for fast protoyping and to get the API right (Getting APIs right is *hard*).

## Installing
First, **Nodejs** and **npm** which comes with it is needed. Then to install all the modules, simply run:

```bash
  npm install
```

## Running and editing
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
  docker run -d -p 10010:10010 --name mock-srv <containerId>
```

## ToDo
- Get the API right
- Write a client to verify the usability of the API (APIs are UIs for developers).
- Clarify legalese
- Setup API Management
- Setup OAuth2
- Align with Fahrplan team
- Align with Open Data (better Open API) team
