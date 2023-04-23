const express = require('express');

const {signup, verify, login, googleLogin, getUser, addToPremium} = require('../Controllers/Auth');
const {sendEmail}   = require( '../Controllers/SendEmail');
const { verifyJWT } = require('../Middlewares/TokenVerifiers');
const router =  express.Router();

router.get("/signup",signup, sendEmail);
router.post("/signin", login);
router.get("/user/get",getUser);
router.get("/google", googleLogin);
router.get("/sendMail",sendEmail);
router.get("/verify",verifyJWT,verify);
router.post("/premium",addToPremium);


module.exports = router;