const bcrypt=require('bcrypt')
const userModel=require("../model/userModel")
module.exports={ 
    createUser: async function(body){
        body.password= await bcrypt.hashSync(body.password,10)
        const user = await userModel.getUserByAttribute(body);
        if(user.count!=0){
            return "user already exists!"
        }
        const data = await userModel.createUser(body);
        return data;
    },
    getUser: async function(body){
        const data = await userModel.getUser();
        return data;
    },
    getUserById: async function(ids){
        const data = await userModel.getUserById(ids);
        return data;
    },
    updateUser:async function(body){
        const data = await userModel.updateUser(body);
        return data;
    },
    removeUser:async function(id){
        const user = await userModel.getUserById(id);
        if(user.count==0){
            return "user does not exists!"
        }
        const data= await userModel.removeUser(id);
        return data;
    }
};

    
    