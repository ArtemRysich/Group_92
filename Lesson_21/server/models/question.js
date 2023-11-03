const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    comment: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('Data', questionSchema)