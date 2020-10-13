const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
let bodyParser = require('body-parser');
let cors = require('cors');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./models/User');
require('./models/Plan');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const createError = require('http-errors')
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

const userRoute = require('./routes/routes');
app.use('/users', userRoute);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);

// Error Handling
app.use((req, res, next) => {
    next(createError(404))
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})
