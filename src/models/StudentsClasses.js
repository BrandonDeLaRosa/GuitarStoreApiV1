const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const StudentsClasses = db.define('StudentsClasses' , {
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
      classesId: {
        type:DataTypes.INTEGER,
        allowNull:false
      }
},
    {
        timestamps:false
    }
);

module.exports= StudentsClasses;