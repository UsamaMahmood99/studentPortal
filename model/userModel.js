const {models}=require("../model/definition")
const { Op } = require("sequelize");
module.exports={
    createUser: async function(body){
        const result = await models.User.create(body);
        return result;
    },
    getUser: async function(body){
        const result=await models.User.findAll({
            attributes:{exclude:['password']}
        });
        return result;
    },
    getUserById: async function(ids){
        const result=await models.User.findAll({
            where: {id:ids},
            include: {
				model: models.Role,
			},
			attributes: { exclude: ['password'] },

        });
        return result;
    },
    updateUser: async function(body){
        const result= await models.User.update(
            {
                ...body
            },
            {
                where : {id:body.id}
            }
        );
        return result;
    },
    removeUser: async function(ids){
        const result=await models.User.destroy({
            where:{id:ids}
        });
        if(result){
			return "success"
		}
		return "fail";
        
    },
    //validation
	getUserByAttribute  : async function(body){
		const result = await models.User.findAndCountAll({
			where: {
				[Op.or]: [
				 
				  { email: body.email },
				  { phoneNumber : body.phoneNumber},
                  {  deletedAt: {
                    [Op.ne]: null
                  }}
				],
			  }
		});
		return result;
	},

};