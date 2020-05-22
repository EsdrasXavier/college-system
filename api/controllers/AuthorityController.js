const Authority = require('../models/Authority');
const Person = require('../models/Person');

module.exports = {

  async all(req, res) {
    const authority = await Authority.findAll();

    return res.json(authority);
  },

  async index(req, res) {
    const { user_id } = req.params;
    const person = await Person.findByPk(user_id, {
      include: { association: 'authority' }
    });

    return res.json(person.authority);
  },

  async store(req, res) {
    const { user_id } = req.params;
    let { authority } = req.body;

    const person = await Person.findByPk(user_id);

    if (!authority) {
      return res.status(400).json({ error: 'You must add an authority' });
    }

    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }

    const newAuthority = await Authority.create({ authority, user_id });

    return res.json(newAuthority);
  }
};