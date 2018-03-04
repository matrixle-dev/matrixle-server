const express = require('express');
const server = express();
const port = 4444;

// server.use((request, response, next) => {
//   request.chance = Math.random();
//   next();
// });

// server.use((request, response, next) => {
//   console.log(request.headers);
//   next();
// });

// server.use((request, response, next) => {
//   response.status(200).json({
//       status: 200
//   });
// });

server.get('/random', (request, response) => {
  console.log(request.url);
  response.json({
      chance: Math.random()
  });
  // response.send('Hello from Express!')
});

server.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }

  console.log(`Server is listening on ${port}`);
});
