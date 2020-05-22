const express = require('express');
const PersonController = require('./controllers/PersonController');
const AddressesController = require('./controllers/AddressesController');
const RegistrationController = require('./controllers/RegistrationController');
const AuthorityController = require('./controllers/AuthorityController');
const BillingController = require('./controllers/BillingController');

const routes = express.Router();

routes.get('/persons', PersonController.index);
routes.get('/persons/:user_id', PersonController.findOne);
routes.post('/persons', PersonController.store);

routes.post('/persons/:user_id/addresses', AddressesController.store);
routes.get('/persons/:user_id/addresses', AddressesController.index);

routes.post('/persons/:user_id/registration', RegistrationController.store);
routes.get('/persons/:user_id/registration', RegistrationController.index);

routes.get('/registration', RegistrationController.all);

routes.post('/persons/:user_id/authority', AuthorityController.store);
routes.get('/persons/:user_id/authority', AuthorityController.index);


routes.post('/persons/:user_id/billing', BillingController.store);
routes.get('/persons/:user_id/billing', BillingController.index);

module.exports = routes;