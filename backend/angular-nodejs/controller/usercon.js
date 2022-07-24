const express = require('express');
const router = express.Router();
const upload = require('../utils/multer')
const path = require("path");

const { useremail, userpassword, username,
    firstname, lastname, dob, role, gender, mobilenumber, userValidation }
    = require('../middleware/userval')
const source = require('../helper/userexp')
router.post('/register', useremail, userpassword, username, userValidation, source.register)
router.post('/login', source.login)
router.get('/list',source.userverify, source.getUser)
router.post('/profile', source.userverify, source.userprofile)
router.post('/edit_profile', upload.single('image'),
    firstname, lastname, dob, role, gender, mobilenumber, userValidation,
    source.updateProfile
)

// kycdetails
router.post('/kyc_status', upload.array('image', 3),source.kycUpdate)

// web3
router.post('/token_create', source.tokenCreate)
router.get('/get_token', source.getToken)
router.post('/create_token', source.liquidityList)
router.get('/liquidity_records', source.liquidityRecords)
module.exports = router; 
