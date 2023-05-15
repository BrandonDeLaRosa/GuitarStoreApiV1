const SchoolAdmin = require('../models/SchoolAdmin');


class SchoolAdminServices  {
    //Todo Get´s

    static async getSchoolAdmin() {
        try {
            const admin = await SchoolAdmin.findAll()
            return admin
        } catch (error) {
            throw(error)
        }
    }

};

module.exports = SchoolAdminServices;