'use strict';

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

exports.list_all_messages = function (req, res) {
  pool.query('SELECT * FROM messages ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

exports.create_a_message = function (req, res) {
  const { title, body } = request.body;

  pool.query('INSERT INTO users (title, body) VALUES ($1, $2)', [title, body], (error, results) => {
    if (error) {
      throw error;
    }

    response.status(201).send(`User added with ID: ${result.insertId}`);
  });
};