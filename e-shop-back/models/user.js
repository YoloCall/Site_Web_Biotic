var mongoose = require('mongoose');



var User = mongoose.model('User', {
    // id:{
    //     type:String,
    //     required: true,
    //     minLength:1,
    //     trim:true
    // },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
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


module.exports = {User};