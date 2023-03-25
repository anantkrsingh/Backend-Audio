const express  = require('express');
const { createMeeting, getRooms } = require('../Controllers/Generator');
const router = express.Router();



router.post('/create', createMeeting)
router.get('/getRooms', getRooms)
  
module.exports = router;