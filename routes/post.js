const express = require("express");
const router = express.Router();

const {
    authJwt
} = require("../middlewares")
const postCtrl = require("../controllers/post");


router.post("/posts", [authJwt.verifyToken], postCtrl.newPost);
router.get("/posts", [authJwt.verifyToken], postCtrl.getAllPosts);


module.exports = router;