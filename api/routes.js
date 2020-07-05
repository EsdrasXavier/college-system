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
routes.put('/persons/:user_id', PersonController.update);

routes.post('/persons/:user_id/addresses', AddressesController.store);
routes.get('/persons/:user_id/addresses', AddressesController.index);

// Status de matricula de user
routes.post('/persons/:user_id/registration', RegistrationController.store);
routes.get('/persons/:user_id/registration', RegistrationController.index);

// Busca todos os status de matricula
routes.get('/registration', RegistrationController.all);

// Autoridades / Permissões
routes.post('/persons/:user_id/authority', AuthorityController.store);
routes.get('/persons/:user_id/authority', AuthorityController.index);

// Boleto
routes.post('/persons/:user_id/billing', BillingController.store);
routes.get('/persons/:user_id/billing', BillingController.index);


routes.put('/billing/pay/:billing_id', BillingController.updateValue);

routes.post('/login', PersonController.login);

module.exports = routes;