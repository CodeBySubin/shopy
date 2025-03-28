import User from '../models/user.js';             
// @desc Get all users
// @route GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();   // ✅ Use the User model
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc Create a new user
// @route POST /api/users
const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default { getUsers, createUser };
