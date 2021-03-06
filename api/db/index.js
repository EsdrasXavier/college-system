const dbConfig = require('../config/database');
const Person = require('../models/Person');
const Address = require('../models/Address');
const Registration = require('../models/Registration');
const Authority = require('../models/Authority');
const Billing = require('../models/Billing');

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      port: 5432,
      host: 'ec2-34-197-188-147.compute-1.amazonaws.com',
      logging: true //false
    });
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize(dbConfig);
  }

  Person.init(sequelize);
  Address.init(sequelize);
  Registration.init(sequelize);
  Authority.init(sequelize);
  Billing.init(sequelize);

  Person.associate(sequelize.models);
  Address.associate(sequelize.models);
  Registration.associate(sequelize.models);
  Authority.associate(sequelize.models);
  Billing.associate(sequelize.models);

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db
