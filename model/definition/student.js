const {Sequelize,Model,DataTypes} = require('sequelize');
let sequelize =require("../../common/dbConnection");

class Student extends Model{}
Student.init(
    {

    id:{
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    regNum:{
        
        allowNull:false,        
        type:DataTypes.STRING(),
    },
    department:{
        
        allowNull:false,        
        type:DataTypes.STRING(),
    },
    semester:{
        
        allowNull:false,        
        type:DataTypes.INTEGER,
    },
    
      },
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName:'Student'
    }
    );
module.exports=Student;