const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/students-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const conn = mongoose.connection;
//Defining Student schema
const studentSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  phone: String,
});

//Student is a class
const Student = mongoose.model("Student", studentSchema);

module.exports = { Student, conn };
