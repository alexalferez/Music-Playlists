var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists');

/* GET users listing. */
router.get('/', playlistsCtrl.index);

module.exports = router;
