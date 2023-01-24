const mongoose = require('mongoose');

const UserModule = new mongoose.Schema({
    name: String,
    email: String,
    created_at: Date,
});


module.exports = {
    UserModule
}