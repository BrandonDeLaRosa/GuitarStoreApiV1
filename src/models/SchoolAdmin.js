const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const SchoolAdmin =db.define('SchoolAdmin', {
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
      },
      firstname: {
        type:DataTypes.STRING(30)
      },
      lastname: {
        allowNull:false,
        type: DataTypes.STRING(30)
      },
      username: {
        allowNull:false,
        type: DataTypes.STRING(30)
      },
      email: {
        allowNull:false,
        type: DataTypes.STRING(70),
        unique:true,
        validate:{
            isEmail:true
        }
      },
      password: {
        allowNull:false,
        type: DataTypes.STRING(30)
      } 
},
    {
        timestamps:false
    }
);

module.exports = SchoolAdmin;