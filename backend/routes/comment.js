const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth')
const commentCtrl = require("../controllers/comment");

router.post("/comments", auth, commentCtrl.newComment);
router.get('/comments/users/:id', auth, commentCtrl.getCommentsByUser);
router.put('/comments/:id', auth, commentCtrl.modifyComment);
router.delete("/comments/:id", auth, commentCtrl.deleteComment);
router.get("/comments/admin", auth, commentCtrl.getAllAdminComments);



module.exports = router;