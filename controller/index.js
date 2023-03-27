module.exports={
    // users
   createUser : require("./user/createUser"),
   getUser:require("./user/getUser"),
   getUserById:require("./user/getUserById"),
   updateUser:require("./user/updateUser"),
   removeUser:require("./user/removeUser"),
  
   //authentication
   login:require('./common/login'),
   logout: require('./common/logout'),
   createToken: require('./common/createToken'),

   //Students
	createStudent: require('./student/createStudent'),
	getStudent: require('./student/getStudent'),
	getStudentById: require('./student/getStudentById'),
	updateStudent: require('./student/updateStudent'),
	removeStudent: require('./student/removeStudent'),

	//teacher
	createTeacher: require('./teacher/createTeacher'),
	getTeacher: require('./teacher/getTeacher'),
	getTeacherById: require('./teacher/getTeacherById'),
	updateTeacher: require('./teacher/updateTeacher'),
	removeTeacher: require('./teacher/removeTeacher'),

	//Courses
	createCourse: require('./course/createCourse'),
	getCourse: require('./course/getCourse'),
	getCourseById: require('./course/getCourseById'),
	updateCourse: require('./course/updateCourse'),
	removeCourse: require('./course/removeCourse'),
   
}