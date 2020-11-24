var express = require('express');
var router = express.Router();
const playlistsCtrl = require('../controllers/playlists');
const passport = require('passport');

/* GET users listing. */
router.get('/', playlistsCtrl.index);

function isLogggedIn(req,res, next){
  if(req.isAuthenticated()){
      return next()
  }else {
      res.redirect('/auth/google')
  }
}

module.exports = router;
