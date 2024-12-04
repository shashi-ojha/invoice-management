const userModel = require('../models/userModel');

const fetchAllUsers = async () => {
  return await userModel.getAllUsers();
};

module.exports = {
  fetchAllUsers,
};
