const Playlist = require('../models/playlist');

module.exports = {
    create,
    delete: deleteReview,
    update
    
};
function update(req, res) {
    Playlist.findOne({'reviews._id': req.params.id}, function (err, playlist) {
        const reviewSubdoc = playlist.reviews.id(req.params.id);
        if(!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/playlists/${playlist._id}`);
        reviewSubdoc.text =req.body.text;
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}

function deleteReview(req, res) {
    Playlist.findOne({'reviews._id': req.params.id}, function(err, playlist) {
        const reviewSubdoc = playlist.reviews.id(req.params.id);
        if(!reviewSubdoc.userID.equals(req.user._id)) return res.redirect(`/playlists/${playlist._id}`);
        reviewSubdoc.remove();
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}

function create(req, res) {
    const playlist =  new Playlist(re.body)
    playlist.findById(req.params.id, function(err, playlist) {
        playlist.reviews.push(req.body);
        playlist.save(function(err) {
            res.redirect(`/playlists/${playlist._id}`);
        });
    });
}