const express  = require('express');
const {enroll, enlist}  = require('../Controllers/Session')



const router = express.Router();

router.get("/enroll",enroll);
router.get("/enlist",enlist);
module.exports = router;