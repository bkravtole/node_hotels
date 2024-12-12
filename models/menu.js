const mongoose = require('mongoose');
// menu items Schema
const menuSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    taste : {
        type : String,
        enum :['sweet' , 'spicy'  , 'sour'],
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    is_drink :{
        type : Boolean,
        default : false
    },
    ingredients : {
        type : [String],
        default :[]
    },
    num_sales : {
        type : Number,
        default : 0
    }
})

const MENUItem = mongoose.model('MenuItem' ,menuSchema );
module.exports = MENUItem;