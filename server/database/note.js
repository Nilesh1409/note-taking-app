const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    lable : {
        type : String,
        require : true,
    },
    title : {
        type : String,
        require : true,
    },
    note : {
        type : String,
        require : true,
    },
    user : {
        ref : 'user'
    }
})

const note = mongoose.model('note',noteSchema);

module.exports = note;