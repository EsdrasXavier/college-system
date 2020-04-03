'use strict';

class msgSchema {
  constructor(title, body, created_date = new Date()) {
    this.title = title;
    this.body = body;
    this.created_date = created_date;
  }
}

module.exports = msgSchema;