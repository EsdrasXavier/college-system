const Billing = require('../models/Billing');
const Person = require('../models/Person');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;
    const person = await Person.findByPk(user_id, {
      include: { association: 'billings' }
    });

    return res.json(person.billings);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { value, scholarshipValue, actualCost, expirationDate } = req.body;

    const person = await Person.findByPk(user_id);

    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }

    const billing = await Billing.create({
      scholarship_value: scholarshipValue,
      actual_cost: actualCost,
      expiration_date: expirationDate,
      value,
      user_id
    });

    return res.json(billing);
  },

  async updateValue(req, res) {
    const { billing_id } = req.params;

    const billing = await Billing.findByPk(billing_id);
    const newBilling = await billing.update({ actual_cost: (billing.value - billing.scholarship_value) });

    return res.json(newBilling);
  }
};