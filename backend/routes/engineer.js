const router = require("express").Router();
const Engineer = require("../models/Engineer");
// const verify = require("../middleware/verify");

//get all engineers
router.get("/", async (req, res) => {
  try {
    await Engineer.find({})
      .populate("user")
      .populate("jobList")
      .exec()
      .then((engineers, error) => {
        if (error) return res.status(400).send(error);
        return res.status(200).send(engineers);
      });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get one engineer

router.get("/:id", async (req, res) => {
  try {
    await Engineer.findOne({ _id: req.params.id })
      .populate("user")
      .populate("jobList")
      .exec()
      .then((engineer, error) => {
        if (error) return res.status(400).send(error);
        return res.status(200).send(engineer);
      });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//add an engineer
router.post("/:id", async (req, res) => {
  try {
    const checkEngineer = await Engineer.findOne({ _id: req.params.id });
    if (checkEngineer) return res.status(409).send("Engineer already exits");

    const engineer = new Engineer({ engineer: req.params.id, ...req.body });
    await engineer.save((error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send("Engineer added");
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//update an engineer

router.patch("/:id", async (req, res) => {
  try {
    const engineer = await Engineer.findOne({ _id: req.params.id });
    if (!engineer) return res.status(404).send("Engineer does not exits");

    await Engineer.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("Engineer updated");
  } catch (error) {
    return res.status(500).send(error);
  }
});

//delete an engineer
router.delete("/:id", async (req, res) => {
  try {
    const engineer = await Engineer.findOne({ _id: req.params.id });
    if (!engineer) return res.status(404).send("Engineer does not exits");

    await engineer.remove((error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send("Engineer removed");
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
