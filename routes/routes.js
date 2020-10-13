const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

let user = mongoose.model('users');

router.route('/create').post((req, res, next) => {
    user.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

router.route('/').get((req, res, next) => {
    user.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});

router.route('/edit/:id').get((req, res, next) => {
    user.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});

router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
            console.log(err);
        } else {
            res.json(data);
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    console.log(req.params.id)
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;
