const {Router} = require ('express');
const {getAllAdmin, createNewAdmin, getOneAdmin, updateAdmin, deleteAdmin} = require('../controllers/schoolAdmin.controller');


const router = Router() ;

router.get('/api/v1/guitarStore/admin', getAllAdmin);
router.post('/api/v1/guitarStore/admin', createNewAdmin);
router.get('/api/v1/guitarStore/admin/:id', getOneAdmin);
router.put('/api/v1/guitarStore/admin/:id', updateAdmin);
router.delete('/api/v1/guitarStore/admin/:id', deleteAdmin);

module.exports = router;