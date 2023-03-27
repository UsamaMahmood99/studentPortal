const {Sequelize,Model,DataTypes} = require('sequelize');
let sequelize =require("../../common/dbConnection");

class Course extends Model{}
Course.init(
    {

    id:{
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    courseCode:{
        
        unique:true,
        allowNull:false,        
        type:DataTypes.STRING(),
    },
    courseTitle:{
        
        unique:true,
        allowNull:false,        
        type:DataTypes.STRING(),
    },
    creditHours:{
        
        
        allowNull:false,        
        type:DataTypes.INTEGER,
    },
    courseLab:{
        allowNull:false,
        type:DataTypes.BOOLEAN,
    }
    
    
      },
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName:'Course'
    }
    );
module.exports=Course;