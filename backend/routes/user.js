const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get("/users", userCtrl.getAllUsers);
router.get("/users/:id", userCtrl.getUserAccount);
router.put("/users/:id", userCtrl.modifyUserAccount);
router.delete("/users/:id", userCtrl.deleteUserAccount);

module.exports = router;