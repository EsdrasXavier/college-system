const Person = require('../models/Person');
const jwtOptions = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = {
  async findOne(req, res) {
    const { user_id } = req.params;

    const person = await Person.findByPk(user_id, {
      include: [
        { association: 'registration' },
        { association: 'authority' },
        { association: 'addresses' },
        { association: 'billings' }
      ],
      attributes: ['id', 'name', 'createdAt', 'updatedAt', 'login']
    });

    return res.json(person);
  },

  async index(req, res) {
    const persons = await Person.findAll({ attributes: ['id', 'name', 'createdAt', 'updatedAt', 'login'], });

    return res.json(persons);
  },

  async store(req, res) {
    const { name, password, login } = req.body;
    const person = await Person.create({ name, password, login });

    return res.json(person);
  },

  async update(req, res) {
    const { user_id } = req.params;
    const { name, password, login } = req.body;

    const person = await Person.findByPk(user_id);
    const newPerson = await person.update({ name, password, login });

    return res.json(newPerson);
  },

  async login(req, res) {
    const { login, password } = req.body;

    if (login && password) {
      let user = await Person.findOne({ where: { login } });

      if (!user) {
        res.status(401).json({ msg: 'Usuário não encontrado' });
      }

      if (user.password === password) {
        let payload = { id: user.id };
        let token = jwt.sign(payload, jwtOptions.jwtSecret);
        res.json({ msg: 'ok', id: user.id, name: user.name, token: token });
      } else {
        res.status(401).json({ msg: 'Senha incorreta' });
      }
    }
  }
};