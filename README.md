#About

This a simple server Node.js based server to test the *transportationAPI*.

Start with

```bash
  nodejs app.js
```

To run in a mock mode, start with:


```bash
  swagger project start -m
```

To run the tests:


```bash
  swagger project test
```

To run the *mock* server as docker container, do:

```bash
  docker build .
  docker run -d -p 10010:10010 --name transapi-srv <containerId>
```


