const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const messagesCtrl = require("../controllers/readmessages");

router.post("/readmessages/:employee_id", auth, messagesCtrl.readmessage);

module.exports = router;