const CustomerServices = require ('../services/customers.service')

const getAllCustomers = async (req,res,next) => {
    try {
        const customers = await CustomerServices.getCustomers();
        res.status(201).json(customers)
    } catch (error) {
        res.status(400).json(error)
    }
}

// const getOneCustomer = async (req,res,next) => {
//     try {
//         const {id} = req.params;
//         const result = await CustomerServices.getCustomer(id);
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

const createNewCustomer = async (req,res,next) => {
    try {
        const newCustomer = req.body;
        const create =await CustomerServices.createNewCustomer(newCustomer)
        res.status(201).json(create)
    } catch (error) {
        res.status(400).json(error)
    }
}

// const updateClass = async (req,res,next) => {
//     try {
//         const {id} = req.params;
//         const classBody = req.body;
//         const updatedClass = await CustomerServices.updateOneClass(id,classBody);
//         res.status(201).json(updatedClass)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

// const deleteClass = async (req,res,next) => {
//     try {
//         const {id} = req.params;
//         const deletedCustomer = await CustomerServices.deleteOneClass(id);
//         res.status(201).json(deletedCustomer)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }
module.exports = {
    getAllCustomers,
    createNewCustomer,
    // getOneCustomer,
    // updateCustomer,
    // deleteCustomer
}