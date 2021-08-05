const { Student } = require("./services/mongodb.js");

async function createStudents() {
  let student = new Student({
    id: "1",
    name: "Student 1",
    phone: "9439811200",
  });
  let result = await student.save();
  console.log(result);

  student = new Student({
    id: "2",
    name: "Student 2",
    phone: "7978321490",
  });
  result = await student.save();
  console.log(result);

  student = new Student({
    id: "3",
    name: "Student 3",
    phone: "8118031305",
  });
  result = await student.save();
  console.log(result);

  student = new Student({
    id: "4",
    name: "Student 4",
    phone: "8118031344",
  });
  result = await student.save();
  console.log(result);

  student = new Student({
    id: "5",
    name: "Student 5",
    phone: "8118031555",
  });
  result = await student.save();
  console.log(result);
}

createStudents();

// let students = [
//   { id: "1", name: "Student 1", phone: 123456789 },
//   { id: "2", name: "Student 2", phone: 123456789 },
//   { id: "3", name: "Student 3", phone: 123456789 },
//   { id: "4", name: "Student 4", phone: 123456789 },
//   { id: "5", name: "Student 5", phone: 123456789 },
// ];

// module.exports = students;
