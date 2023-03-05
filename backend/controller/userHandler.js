
const User = require("../user");


async function addUser(req, res) {
  const { name, age, phone_number, latitude, longitude, email_id, preferences, credential } = req.body;

  try {
    // Create a new user with the provided data
    const user = await User.create({
      name,
      age,
      phone_number,
      latitude,
      longitude,
      email_id,
      preferences,
      credential
    });

    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getUser(req, res) {
  const { credential } = req.params.id;

  try {
    // Find the user with the matching credential
    const user = await User.findOne({ where: { credential : req.params.id } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user information
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { addUser, getUser };