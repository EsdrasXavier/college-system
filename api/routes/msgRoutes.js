'use strict';

module.exports = function (app) {
  const messages = require('../controllers/msgController');

  // messages Routes
  app.route('/messages')
    .get(messages.list_all_messages)
    .post(messages.create_a_message);
};