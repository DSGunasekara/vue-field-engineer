const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EngineerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  availability: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Engineer", EngineerSchema);
