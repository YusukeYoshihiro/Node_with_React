const mongoose = require('mongoose');
const { Schema }  = mongoose;

const userSchema = new Schema({
        googleId: String,
        plan: String,
        location: String,
        description: String,
    },
);

mongoose.model('plans', userSchema);
