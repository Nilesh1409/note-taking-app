const mongoose = require('mongoose');

async function main(){

    try {
        await mongoose.connect('mongodb://localhost:27017/noteapp');
        console.log('Database connected');
    } catch (error) {
        console.log('Database connnectiom fail');
    }

}

module.exports = main;