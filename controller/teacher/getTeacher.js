const teacherService = require("../../service/teacherService")

module.exports = async function (req,res){
    const data = await teacherService.getTeacher(req.body);
    res.send(data);

}