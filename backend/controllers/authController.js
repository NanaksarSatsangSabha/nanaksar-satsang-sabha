const User = require('../models/user');

exports.register = async (req, res) => {
  const { phoneIdentifier, email, firstName, lastName, phoneType } = req.body;
  try {
    const user = await User.create({ phoneIdentifier, email, firstName, lastName, phoneType });
    res.json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { phoneIdentifier, email } = req.body;
  try {
    const user = await User.findOne({ $or: [{ phoneIdentifier }, { email }] });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // In a real application, you would verify credentials and generate a token.
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};