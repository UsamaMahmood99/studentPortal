const studentService = require("../../service/studentService")

module.exports = async function (req,res){
    const data = await studentService.getStudentById(req.query.id);
    res.send(data);

}