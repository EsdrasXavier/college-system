const Address = require('../models/Address');
const Person = require('../models/Person');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;
    const person = await Person.findByPk(user_id, {
      include: { association: 'addresses' }
    });

    return res.json(person.addresses);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const {
      number,
      street,
      neighborhood,
      city,
      state,
      country,
      zipcode
    } = req.body;

    const person = await Person.findByPk(user_id);

    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }

    const address = await Address.create({
      number,
      street,
      neighborhood,
      city,
      state,
      country,
      zipcode,
      user_id
    });

    return res.json(address);
  }
};