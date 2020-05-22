const Person = require('../models/Person');


module.exports = {
  async findOne(req, res) {
    const { user_id } = req.params;

    const person = await Person.findByPk(user_id, {
      include: [
        { association: 'registration' },
        { association: 'authority' },
        { association: 'addresses' },
        { association: 'billings' }
      ]
    });

    return res.json(person);
  },

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