const restful = require("node-restful");
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
  descriptionTask: { type: String, required: true },
  doneTask: { type: Boolean, required: true, default: false },
  createdTask: { type: Date, default: Date.now },
});

module.exports = restful.model('Todo', todoSchema)
