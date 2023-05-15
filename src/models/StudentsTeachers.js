const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const StudentsTeachers = db.define('StudentsTeachers' , {
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      studentsId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      teachersId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
},
    {
        timestamps:false
    }
);

module.exports= StudentsTeachers;