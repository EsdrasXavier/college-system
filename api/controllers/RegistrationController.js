const Registration = require('../models/Registration');
const Person = require('../models/Person');

module.exports = {

  async all(req, res) {
    const registration = await Registration.findAll();

    return res.json(registration);
  },

  async index(req, res) {
    const { user_id } = req.params;
    const person = await Person.findByPk(user_id, {
      include: { association: 'registration' }
    });

    return res.json(person.registration);
  },

  async store(req, res) {
    const { user_id } = req.params;
    let { status } = req.body;

    const person = await Person.findByPk(user_id);

    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }

    if (!status) {
      status = 'active';
    }

    const registration = await Registration.create({ status, user_id });

    return res.json(registration);
  }
};