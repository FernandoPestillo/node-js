const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: 'String',
        required: true,
    },
    lastName: {
        type: 'String',
    },
    email: {
        type: 'String',
    },
    password: {
        type: 'String',
        required: true,
        minLength: 7,
    },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;