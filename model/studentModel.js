const {models}=require("../model/definition")

module.exports = {
    createStudent: async function ( body ) {
      userData = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        password: body.password
      };
      const user = await models.User.create(userData);
      studentData = {
        registrationNo: body.registrationNo,
        department: body.department,
        semster: body.semster,
        userId: user.id
      };
      const result = await models.Student.create(studentData);
      res = [user, result];
      return res;
    },
    getStudent: async function () {
      const result = await models.Student.findAll({
          include: {
              model: models.User,
          }
      });
      return result;
    },
    getStudentById: async function (ids) {
      const result = await models.Student.findAll({
        where: { id: ids },
        include: {
          model: models.User,
        },
      });
      return result;
    },
    updateStudent: async function (body) {
          const result = await models.Student.findByPk(body.id);
      const updateUser = await models.User.update(
        {
          ...body,
        },
        {
          where: { id: result.id },
        },
        );
      const updateStudent = await models.Student.update(
        {
          ...body,
        },
        {
          where: { id: body.id },
        },
      );
          return "Student's Info Updated";
    },
    removeStudent: async function (ids) {
          const result = await models.Student.findByPk(ids);
      const removeUser = await models.User.destroy({
        where: { id: result.userId },
      });
      const removeStudent = await models.Student.destroy({
        where: { id: ids },
      });
      return "Student Deleted";
    },
  };