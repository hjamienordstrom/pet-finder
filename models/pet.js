const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    birthday: String,
    color: String,
    sex: String,
    photoUrl: String
}, {
    timestamps: true
})





module.exports = mongoose.model('Pet', petSchema);