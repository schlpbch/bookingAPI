#About

This a simple server Node.js based server to test the *transportationAPI*.

Start with

`
  nodejs app.js
`

To run in a mock mode, start with:

`
  swagger project start -m
`

To run the tests:

`
  swagger project test
`

To run the server as docker container, do:

`
  docker build .
  docker run -d -p 10010:10010 --name transapi-srv <containerId>
`


