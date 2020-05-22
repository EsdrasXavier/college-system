const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Person = require('../models/Person');
const Address = require('../models/Address');
const Registration = require('../models/Registration');
const Authority = require('../models/Authority');

const connection = new Sequelize(dbConfig);

Person.init(connection);
Address.init(connection);
Registration.init(connection);
Authority.init(connection);

Person.associate(connection.models);
Address.associate(connection.models);
Registration.associate(connection.models);
Authority.associate(connection.models);

module.exports = connection;