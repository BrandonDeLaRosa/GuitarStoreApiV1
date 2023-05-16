const Customers = require ('../models/Customers')

class CustomerServices {

    static async getCustomers() {
        try {
            const costumers = await Customers.findAll()
            return costumers
        } catch (error) {
            throw(error)
        }
    }

    // static async getCustomer(id){
    //     try {
    //         const result = await Customers.findByPk(id)
    //         return result
    //     } catch (error) {
    //         throw(error)
    //     }
    // }

    static async createNewCustomer(newCustomer){
        try {
            const creating = await Customers.create(newCustomer)
            return creating
        } catch (error) {
            throw(error)
        }
    }

    // static async updateOneClass(id,ClassBody){
    //     try {
    //         const updated = await Customers.update(ClassBody,{
    //             where: {id}
    //         });
    //         return updated
    //     } catch (error) {
    //         throw(error)
    //     }
    // }

    // static async deleteOneClass(id){
    //     try {
    //         const deleted = await Customers.destroy({
    //             where: {id}
    //         })
    //         return deleted
    //     } catch (error) {
    //         throw(error)
    //     }
    // }

};

module.exports = CustomerServices;
