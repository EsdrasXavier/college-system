const express = require('express');
const routes = require('./api/routes');
const auth = require("./api/controllers/auth.js")();

require('./api/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(auth.initialize());
app.use(express.json());
app.use(routes);
app.listen(port);

console.log('API server started on: ' + port);