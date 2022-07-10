const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
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