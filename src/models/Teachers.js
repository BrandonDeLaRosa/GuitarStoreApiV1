const {DataTypes} = require('sequelize');
const db = require('../utils/database');
 
const Teachers = db.define('Teachers' , {
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      firstname: {
        type:DataTypes.STRING(25),
        allowNull:false
      },
      lastname: {
        type:DataTypes.STRING(25),
        allowNull:false
      },
      location: {            //!  Tabla agregada con migracion, post modelo creado.
        type:DataTypes.STRING,
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

module.exports= Teachers;