const express = require('express');
const router = express.Router();
const songCtrl = require('../controllers/songs');

router.get('/songs/new', songCtrl.new)

module.exports = router;