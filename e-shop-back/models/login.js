var mongoose = require('mongoose');

var LogIn = mongoose.model('LogIn', {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});


module.exports = {LogIn};