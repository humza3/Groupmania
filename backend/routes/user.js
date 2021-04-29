const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAllUsers);
router.get('/users/:employee_id', userCtrl.getUserAccount);
router.put('/users/:employee_id', userCtrl.modifyUser);
router.delete('/users/:employee_id', userCtrl.deleteUserAccount);

module.exports = router;