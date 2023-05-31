const { Schema, model } = require("mongoose");

const NewsSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, reuired: true },
});

module.exports = model("News", NewsSchema);
