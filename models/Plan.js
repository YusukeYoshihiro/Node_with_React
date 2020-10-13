const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
        googleId: String,
        name: String,
        email: String,
        description: String,
    },
);

mongoose.model('plans', userSchema);
