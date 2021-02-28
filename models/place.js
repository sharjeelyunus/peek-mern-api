const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: { type: String, requried: true },
    description: { type: String, requried: true },
    image: { type: String, requried: true },
    address: { type: String, requried: true },
    location: {
        lat: { type: Number, requried: true },
        lng: { type: Number, requried: true }
    },
    creator: { type: String, requried: true }
});

module.exports = mongoose.model('Place', placeSchema);