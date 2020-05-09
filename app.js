const express = require('express');
const routes = require('./api/routes');

require('./api/db');

const app = express();
port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
app.listen(port);

console.log('API server started on: ' + port);