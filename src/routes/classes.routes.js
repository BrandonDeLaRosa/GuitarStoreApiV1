const {Router} = require('express');
const { getAllClasses, getOneClass, createNewClass, updateClass, deleteClass } = require('../controllers/classes.controllers');


const router = Router();

router.get('/api/v1/guitarStore/classes', getAllClasses);
router.get('/api/v1/guitarStore/class/:id', getOneClass);
router.post('/api/v1/guitarStore/class', createNewClass);
router.put('/api/v1/guitarStore/class/:id',updateClass);
router.delete('/api/v1/guitarStore/class/:id',deleteClass);

module.exports = router;