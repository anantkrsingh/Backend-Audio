const express = require('express');

const {signup, verify} = require('../Controllers/Auth');
const   {sendEmail}   = require( '../Controllers/SendEmail');
const { verifyJWT } = require('../Middlewares/TokenVerifiers');
const router =  express.Router();

router.get("/signup",signup, sendEmail);
router.get("/sendMail",sendEmail);
router.get("/verify",verifyJWT,verify);


module.exports = router;
