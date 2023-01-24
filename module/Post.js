const mongoose = require('mongoose');

const PostModule = new mongoose.Schema({
    title: String,
    created_by: String,
    created_at: Date,
});


module.exports = {
    PostModule
}
