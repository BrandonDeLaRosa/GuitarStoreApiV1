const SchoolAdminServices = require('../services/schoolAdmin.service');

const getAllAdmin = async (req,res,next) => {
    try {
        const schoolAdmin = await SchoolAdminServices.getSchoolAdmin();
        res.status(200).json(schoolAdmin)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllAdmin
}