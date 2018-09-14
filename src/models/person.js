const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    country: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('persons', PersonSchema);