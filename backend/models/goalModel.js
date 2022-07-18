const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    id:{
        type: Number,
        auto: true,
        require: true,
        index: true,
    },
    title: {
        type: String,
        require: [true, 'Please add a text value']
    },
    status: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema);