const Song = require('../models/song');
const Playlist = require('../models/playlist');

module.exports = {
    new: newSong,
    create,
    addToSongList

}

function addToSongList(req, res) {
    Playlist.findById(req.params.id, function(err, playlist) {
        playlist.songslist.push(req.body.songId);
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}

function create(req, res) {
    let song = new Song(req.body)
    song.save(function(err, s) {
        console.log(err);
        if(err) res.redirect('/songs/new');
        else res.redirect('/');
    });
    // Song.create(req.body, function(err, song) {
    //     res.redirect('/songs/new');
    // });
}

function newSong(req, res) {
    Song.find({}, function(err, songs){
        res.render('songs/new', {
            title: 'Add Song',
            songs
        });
    })
}