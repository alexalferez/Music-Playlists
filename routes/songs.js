const express = require('express');
const router = express.Router();
const songCtrl = require('../controllers/songs');

router.get('/songs/new', songCtrl.new);
router.post('/songs', songCtrl.create);
router.post('/playlists/:id/songs', songCtrl.addToSongList);

module.exports = router;