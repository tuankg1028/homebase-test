const db = require("../models");
const userModel = db.users;

// Create and save new User
exports.create = async (req, res, next) => {
  try {
    const { fullName, username, password } = req.body;
    if (!fullName || !username || !password) {
      res.status(400).send({
        message: "Invalid request body",
      });
    }

    // Create a Post object
    const user = {
      fullName,
      username,
      password,
    };

    // Save User object to db
    const newUser = await userModel.create(user);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

// Retrieve all User (Receive data with condition).
exports.getUsers = async (req, res, next) => {
  try {
    const users = await userModel.findAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

// Get Post object by ID
exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = userModel.findByPk(userId);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// Update a User object by the id
exports.updateUser = async (req, res, next) => {
  try {
    const userID = req.params.id;

    const num = await userModel.update(req.body, {
      where: { id: userID },
    });

    if (num[0] !== 1) {
      return res.json({
        message: `Cannot update User object with id=${userID}!`,
      });
    }

    res.json({
      message: "User object successfully updated.",
    });
  } catch (err) {
    next(err);
  }
};

// Delete User object by ID
exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const num = await userModel.destroy({
      where: { id: id },
    });

    if (num !== 1) {
      return res.send({
        message: `Cannot delete User object with id=${id}!`,
      });
    }

    res.send({
      message: "User object successfully deleted.",
    });
  } catch (err) {
    next(err);
  }
};
