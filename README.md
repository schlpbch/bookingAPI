#About

This a simple server Node.js based server to test the *transportationAPI*.


To edit the API interactively, do:

```bash
  swagger project edit
```
The browser will then provide you with tab to edit the specification.

To run in a mock mode, start with:


```bash
  swagger project start -m
```

To run the tests:


```bash
  swagger project test
```

To run the *mock* server, do:
```bash
  nodemon1 app.js
```

To run the *mock* server as docker container, do:

```bash
  docker build .
  docker run -d -p 10010:10010 --name transapi-srv <containerId>
```

# ToDo

- Clarify legalese
- Setup API Management
- Setup OAuth2
- Align with Fahrplan Team
