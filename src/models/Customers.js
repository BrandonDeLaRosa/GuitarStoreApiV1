const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const Customers = db.define('Customers' , {

id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
  },
  name: {
    type:DataTypes.STRING(25),
    allowNull:false
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false
  },
  phone: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  location: {
    type:DataTypes.TEXT,
    allowNull:false
  },
  schoolAdminId: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
},
    {
        timestamps:false
    }
);

module.exports= Customers;