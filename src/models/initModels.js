const Classes = require('../models/Classes');
const Customers = require('../models/Customers');
const Products = require('../models/Products');
const SchoolAdmin = require('../models/SchoolAdmin');
const Students = require('../models/Students');
const StudentsClasses = require('../models/StudentsClasses');
const StudentsTeachers = require('../models/StudentsTeachers');
const Teachers = require('../models/Teachers');

const initModels = () => {

    
    SchoolAdmin.hasMany(Teachers, {foreingKey: 'schoolAdminId'});
    Teachers.belongsTo(SchoolAdmin, {foreingKey: 'schoolAdminId'});

    SchoolAdmin.hasMany(Students, {foreingKey: 'schoolAdminId'});
    Students.belongsTo(SchoolAdmin, {foreingKey: 'schoolAdminId'});

    SchoolAdmin.hasMany(Classes, {foreingKey: 'schoolAdminId'});
    Classes.belongsTo(SchoolAdmin, {foreingKey: 'schoolAdminId'});

    SchoolAdmin.hasMany(Customers, {foreingKey: 'schoolAdminId'});
    Customers.belongsTo(SchoolAdmin, {foreingKey: 'schoolAdminId'});

    SchoolAdmin.hasMany(Products, {foreingKey: 'schoolAdminId'});
    Products.belongsTo(SchoolAdmin, {foreingKey: 'schoolAdminId'});



    Teachers.hasMany(Classes, {foreingKey: 'teacherId'});
    Classes.belongsTo(Teachers, {foreingKey: 'teacherId'});
    
    Customers.hasMany(Products,{foreignKey: 'customerId'});
    Products.hasOne(Customers, {foreignKey: 'customerId'})
    


    //TODO Tablas Pivote.
    Classes.hasMany(StudentsClasses, {foreignKey: 'classesId'})
    Students.hasMany(StudentsClasses, {foreingKey: 'studentsId'});

    Teachers.hasMany(StudentsTeachers, {foreignKey: 'teachersId'});
    Students.hasMany(StudentsTeachers, {foreignKey: 'studentsId'});

}

module.exports = initModels;
