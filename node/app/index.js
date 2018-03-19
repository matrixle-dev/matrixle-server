const express = require('express');
const server = express();
const port = 4488;

bodyParser = require('body-parser');
server.use(bodyParser.json());

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

server.get('/', (request, response) => {
  console.log(request.url);
  console.log(request.body)
  
  requestObj = JSON.parse(require('url').parse(request.url));
  
  if (requestObj.user_name == "mofan"
      && requestObj.passwd == "mofan") {
      response.json({result: true});
      console.log("access granted");
  } else {
      console.log(requestObj);
      response.json({result: false});
      console.log("access denied");
  }
  // response.send('Hello from Express!')
});

server.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }

  console.log(`Server is listening on ${port}`);
});
