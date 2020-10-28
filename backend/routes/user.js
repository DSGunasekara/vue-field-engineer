const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Engineer = require("../models/Engineer");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).send("User does not exits");
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//create a user
router.post("/", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) return res.status(409).send("User already exits");

    const user = new User({ ...req.body });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    if (role === "Engineer") {
      const engineer = await Engineer({ user });
      await engineer.save((error, _) => {
        if (error) return res.status(400).send(error);
      });
    }

    await user.save((error, savedUser) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send(savedUser);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//update a user
router.patch("/:id", async (req, res) => {
  try {
    const checkUser = await User.findOne({ _id: req.params.id });
    if (!checkUser) return res.status(404).send("User does not exits");

    await User.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("User updated");
  } catch (error) {
    return res.status(500).send(error);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).send("User does not exits");
    await user.remove((error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send("User deleted");
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
