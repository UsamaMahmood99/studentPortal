const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const  User  = require('./User');
const Student=require('./student');
const Teacher=require('./teacher');
const Course=require('./courses');


const models = {
    User,Student,Teacher,Course
    
};

// users-student one to one
User.hasOne(Student, { onDelete: 'CASCADE', foreignKey: 'userId' });
Student.belongsTo(User, { onDelete: 'CASCADE', foreignKey: 'userId' });

// users-teacher one to one
User.hasOne(Teacher, { onDelete: 'CASCADE', foreignKey: 'userId' });
Teacher.belongsTo( User, { onDelete: 'CASCADE', foreignKey: 'userId' } );

Teacher.belongsToMany(Course, {
	as: 'teacher',
	through: 'junction',
	foreignKey: 'teacherId',
});
Course.belongsTo(Teacher, {
	as: 'course',
	through: 'junction',
	foreignKey: 'courseId',
});

let junction = sequelize.models.junction;
Student.hasMany(junction, { foreignKey: 'studentId' });
junction.belongsTo(Student, { foreignKey: 'studentId' });


sequelize.models = models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};