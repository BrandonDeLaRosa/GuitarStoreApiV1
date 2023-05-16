const {Router} = require('express');
const { getAllCustomers, getOneCustomer, createNewCustomer } = require('../controllers/customers.controllers');



const router = Router();

router.get('/api/v1/guitarStore/customers', getAllCustomers);
// router.get('/api/v1/guitarStore/customers/:id', getOneCustomer);
router.post('/api/v1/guitarStore/customers', createNewCustomer);
// router.put('/api/v1/guitarStore/class/:id',updateClass);
// router.delete('/api/v1/guitarStore/class/:id',deleteClass);

module.exports = router;