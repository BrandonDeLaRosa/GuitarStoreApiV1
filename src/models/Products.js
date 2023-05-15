const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const Products = db.define('Products' , {
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      description: {
        type:DataTypes.TEXT,
        allowNull:false
      },
      price: {
        type:DataTypes.FLOAT,
        allowNull:false
      },
      quantity: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      img: {
        type:DataTypes.STRING,
        allowNull:false
      },
      available: {
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      schoolAdminId: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      customerId: {
        type:DataTypes.INTEGER,
        allowNull:false
      } 
},
    {
        timestamps:false
    }
);

module.exports= Products;