const {Sequelize,Model,DataTypes} = require('sequelize');
let sequelize =require("../../common/dbConnection");

class Teacher extends Model{}
Teacher.init(
    {

        id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER(),
		},
		department: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		officeLocation: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		officeStart: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		officeEnd: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
    
      },
    {
        timestamps:true,
        paranoid:true,
        sequelize,
        modelName:'Teacher'
    }
    );
module.exports=Teacher;