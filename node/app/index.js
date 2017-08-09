const express = require('express');
const server = express();
const port = 4444;

server.use((request, response, next) => {
  request.chance = Math.random();
  next();
});

server.use((request, response, next) => {
  console.log(request.headers);
  next();
});

server.use((request, response, next) => {
  response.status(404).json({
      status: 404
  });
});

server.get('/', (request, response) => {
  console.log(request.url);
  response.json({
      chance: request.chance
  });
  // response.send('Hello from Express!')


});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
