const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {type: String, required: true, unique: true},
    album: String,
    perentalAdvisory: String
},{
    timestamps: true
});

module.exports = mongoose.model('Song', songSchema);