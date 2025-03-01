const express = require('express');
const router = express.Router();

const {validateUser, checkAuthAdmin} = require("../middleware/auth")

const auth = require("./auth")
const users = require("./users")
const admin = require("./admin")
const post = require("./post")
const match = require("./match")

router.use("/auth", auth);
router.use("/users", users);
router.use("/admin", checkAuthAdmin, admin)
router.use("/post", post)
router.use("/match", match)

module.exports = router