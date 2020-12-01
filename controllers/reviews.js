const Playlist = require('../models/playlist');

module.exports = {
    create,
    delete: deleteReview,
    update
    
};
function update(req, res) {
    Playlist.findOne({'reviews._id': req.params.id}, function (err, playlist) {
        const reviewSubdoc = playlist.reviews.id(req.params.id);
        if(!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/playlists/${playlist._id}`);
        reviewSubdoc.content =req.body.content;
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}

function deleteReview(req, res) {
    Playlist.findOne({'reviews._id': req.params.id}, function(err, playlist) {
        const reviewSubdoc = playlist.reviews.id(req.params.id);
        if(!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/playlists/${playlist._id}`);
        reviewSubdoc.remove();
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}

function create(req, res) {
    Playlist.findById(req.params.id, function(err, playlist) {
        req.body.user = req.user
        playlist.reviews.push(req.body);
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}