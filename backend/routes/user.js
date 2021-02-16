const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
console.log("2");
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAllUsers);
router.get('/users/:id', userCtrl.getUserAccount);
router.put('/users/:employee_id', userCtrl.modifyUser);
router.delete('/users/:id', userCtrl.deleteUserAccount);

module.exports = router;