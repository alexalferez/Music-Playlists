const Playlist = require('../models/playlist');

module.exports = {
    index
}

function index(req, res){
    Playlist.find({}, function(err, playlists) {
        res.render('playlists/index');
    });
}