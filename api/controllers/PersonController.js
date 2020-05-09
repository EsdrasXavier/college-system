const Person = require('../models/Person');


module.exports = {
  async index(req, res) {
    const persons = await Person.findAll();

    return res.json(persons);
  },

  async store(req, res) {
    const { name, password, login } = req.body;
    const person = await Person.create({ name, password, login });

    return res.json(person);
  }
};