# loopback-rest-demo
npm install
node .

browse http://0.0.0.0:3001/explorer


There is one model that uses the rest-connector `myRestModel`. Its datasource is directly the API, the API routes are defined in the datasource.

There is another fake internal model `modelThatUsesTheAPI`, with an example of how to use an API call through the `myRestModel`.
