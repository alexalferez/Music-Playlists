const Playlist = require('../models/playlist');

module.exports = {
    index
}

function index(req, res, next){
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

  let sortKey = req.query.sort || 'name';
  Playlist.find(modelQuery)
  .sort(sortKey).exec(function(err, student) {
      if (err) return next(err);
      res.render('playlists/index', {
          users,
          user: req.user,
          name: req.query.name,
          sortKey
      });
  });
}