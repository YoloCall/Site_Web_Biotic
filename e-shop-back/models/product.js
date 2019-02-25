var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
    id:{
        type:String,
        required: true,
        minLength:1,
        trim:true
    },
    name:{
        type:String,
        required: true,
        minLength:1,
        trim:true
    },
    price:{
        type:Number,
        default: null
    },
    photo:{
        type:String,
        default: null
    },
    category:{
        type:String,
        default: null
    }, 
    rates:[Number]
});

module.exports = {Product};