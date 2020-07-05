const express = require('express');
const routes = require('./api/routes');
const auth = require("./api/controllers/auth.js")();
const db = require('./api/db/index');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;

app.use(auth.initialize());
app.use(express.json());
app.use(routes);
// app.listen(port);
app.set('port', port);

db.sequelize.sync().then(function () {
  http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
});