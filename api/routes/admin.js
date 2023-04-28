const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin')

//USER
router.get("/:userId", AdminController.getUsers)
router.delete("/:userId", AdminController.deleteUsers)
router.put(":/userId", AdminController.promoteAdmin)

module.exports = router