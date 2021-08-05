const { v4: uuidv4 } = require("uuid");
let { Student, conn } = require("../services/mongodb");
const getStudents = async (req, reply) => {
  const students = await Student.find();
  reply.send(students);
};

const getStudent = async (req, reply) => {
  const { id } = req.params;

  const student = await Student.find({ id: id });
  console.log(student);

  if (!student) {
    return reply.code(404).send(`Student with id: ${id} not found.`);
  }

  reply.send(student);
};

const addStudent = (req, reply) => {
  const { name, phone } = req.body;
  const student = {
    id: uuidv4(),
    name,
    phone,
  };

  conn.collection("students").insert(student);
  reply.send(student);
};

const deleteStudent = async (req, reply) => {
  const { id } = req.params;

  const student = await Student.findOneAndRemove({ id: id });
  if (!student) {
    return reply.code(404).send(`Student with id: ${id} not found.`);
  }

  reply.send({ message: `Student with id: ${id} has been removed.` });
};

const updateStudentPhone = async (req, reply) => {
  let { id } = req.params;
  //   let req_body = JSON.stringify(req.body);
  //   const { phone } = JSON.parse(req_body);
  const { phone } = req.body;
  console.log("--------------");
  console.log(`id: ${id}`);
  console.log(`phone: ${phone}`);
  console.log("----------------");
  const student = await Student.findOneAndUpdate({ id: id }, { phone: phone });
  if (!student) {
    return reply.code(404).send(`Student with id: ${id} not found.`);
  }

  reply.send(student);
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudentPhone,
};
