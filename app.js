const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/msgRoutes');
routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);