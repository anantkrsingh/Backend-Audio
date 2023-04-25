const express  = require('express');
const {enroll, enlist, addTimestamp}  = require('../Controllers/Session')



const router = express.Router();

router.get("/enroll",enroll);
router.get("/enlist",enlist);
router.post("/addTimeStamp",addTimestamp)
module.exports = router;