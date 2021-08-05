const {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudentPhone,
} = require("../controllers/students");

// Student schema
const Student = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    phone: { type: "integer" },
  },
};

// Options for get all students
const getStudentsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        students: Student,
      },
    },
  },
  handler: getStudents,
};

const getStudentOpts = {
//   schema: {
//     response: {
//       200: Student,
//     },
//   },
  handler: getStudent,
};

const postStudentOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "phone"],
      properties: {
        name: { type: "string" },
        phone: { type: "integer" },
      },
    },
    response: {
      201: Student,
    },
  },
  handler: addStudent,
};

const deleteStudentOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteStudent,
};

const updateStudentOpts = {
  schema: {
    body: {
      type: "object",
      required: ["phone"],
      properties: {
        phone: { type: "integer" },
      },
    },
    response: {
      200: Student,
    },
  },
  handler: updateStudentPhone,
};

function studentRoutes(fastify, options, done) {
  // Get all students
  fastify.get("/students", getStudentsOpts);

  // Get single student
  fastify.get("/students/:id", getStudentOpts);

  // Add student
  fastify.post("/students", postStudentOpts);

  // Delete student
  fastify.delete("/students/:id", deleteStudentOpts);

  // Update student
  fastify.put("/students/:id", updateStudentOpts);

  done();
}

module.exports = studentRoutes;
