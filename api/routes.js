const express = require('express');
const PersonController = require('./controllers/PersonController');
const AddressesController = require('./controllers/AddressesController');

const routes = express.Router();

routes.get('/persons', PersonController.index);
routes.post('/persons', PersonController.store);

routes.post('/persons/:user_id/addresses', AddressesController.store);
routes.get('/persons/:user_id/addresses', AddressesController.index);

module.exports = routes;