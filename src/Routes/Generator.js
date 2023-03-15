const express  = require('express');
const { createMeeting } = require('../Controllers/Generator');
const router = express.Router();



router.post('/create', createMeeting)
  module.exports = router;