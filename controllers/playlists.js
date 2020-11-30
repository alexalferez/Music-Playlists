const Playlist = require('../models/playlist');

module.exports = {
    index,
    new: newPlaylist,
    create,
    show
}

function show(req, res) {
    Playlist.findById((req.params.id), function(err, playlist) {
        res.render('playlists/show', { title: 'Playlist Info', playlist});
    })
}

function newPlaylist (req, res) {
    res.render('playlists/new', { title: 'Add Playlist'});
}

function index(req, res, next){
  Playlist.find({}, function(err, playlists){
      res.render('playlists/index', { title: 'All Playlists', playlists});
  });
}


function create (req,res) {
    const playlist = new Playlist(req.body);
    playlist.save(function(err){
        if(err) return res.render('playlists/new');
        res.redirect(`/playlists/${playlist._id}`);
    });
}