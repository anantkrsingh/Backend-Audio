const express = require('express');

const {signup, verify, login} = require('../Controllers/Auth');
const {sendEmail}   = require( '../Controllers/SendEmail');
const { verifyJWT } = require('../Middlewares/TokenVerifiers');
const router =  express.Router();

router.get("/signup",signup, sendEmail);
router.get("/signin", login);
router.get("/sendMail",sendEmail);
router.get("/verify",verifyJWT,verify);


module.exports = router;
