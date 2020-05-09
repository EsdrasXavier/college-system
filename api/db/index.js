const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Person = require('../models/Person');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

Person.init(connection);
Address.init(connection);

Person.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;