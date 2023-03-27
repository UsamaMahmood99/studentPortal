const {models}=require("../model/definition")

module.exports={
    createCourse: async function(body){
        const result = await models.Courses.create(body);
        return result;
    },
    getCourse: async function(body){
        const result=await models.Courses.findAll();
        return result;
    },
    getCourseById: async function(ids){
        const result=await models.Courses.findAll({
            where: {id:ids},
        });
        return result;
    },
    updateCourse: async function(body){
        const result= await models.Courses.update(
            {
                ...body
            },
            {
                where : {id:body.id}
            }
        );
        return result;
    },
    removeCourse: async function(ids){
        const result=await models.Courses.destroy({
            where:{id:ids}
        });
        if(result){
			return "success"
		}
		return "fail";
        
    },
};