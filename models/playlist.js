const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
  }, {
    timestamps: true
  });

const playlistSchema = new Schema({
    playlist: String,
    reviews: [reviewSchema],
    songslist: [{type: Schema.Types.ObjectId, ref: 'Song'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist', playlistSchema)