const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Africa = new Schema({
    afCountryName: String,
    afDescription: String,
    afVisitAgain: String,
    afImage: String
});

module.exports = mongoose.model("Africa", Africa)