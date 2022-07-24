const express = require('express');
const router = express.Router();
const { useremail, userpassword, password, username, userValidation }
    = require('../middleware/userval')
const adminsource = require('../helper/adminexp')
router.post('/admin_register', useremail,
    password, username, userValidation, adminsource.admin )

module.exports = router; 