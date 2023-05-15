const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const Students = db.define('Students' , {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
        firstname: {
          type:DataTypes.STRING(25),
          allowNull:false
        },
        lastname: {
          type:DataTypes.STRING(25),
          allowNull:false     
        },
        age: {
          type:DataTypes.INTEGER,
          allowNull:false     
        },
        location: {
          type:DataTypes.STRING,
          allowNull:false   
        },
        schoolAdminId: {
          type:DataTypes.INTEGER,
          allowNull:false
        }
},
    {
        timestamps:false
    }
);

module.exports= Students;