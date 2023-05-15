const {Router} = require ('express');
const {getAllAdmin} = require('../controllers/schoolAdmin.controller');

const router = Router() ;

router.get('/api/v1/GuitarStore/admin', getAllAdmin);

module.express = router;