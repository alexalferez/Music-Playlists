const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlist: String,
    songslist: [{type: Schema.Types.ObjectId, ref: 'Song'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema)