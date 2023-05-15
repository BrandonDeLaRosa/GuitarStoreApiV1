const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const Classes = db.define('Classes' , {
    id: 
    {
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    name: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    description: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    available: 
    {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    },
    schoolAdminId: 
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    teacherId: 
    {
      type:DataTypes.INTEGER,
      allowNull:false
    },
},
{
    timestamps:false
});

module.exports= Classes;