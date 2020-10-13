const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

let plan = mongoose.model('plans');

router.route('/create').post((req, res, next) => {
    plan.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

router.route('/').get((req, res, next) => {
    plan.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});

router.route('/edit/:id').get((req, res, next) => {
    plan.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
});

router.route('/update/:id').put((req, res, next) => {
    plan.findByIdAndUpdate(req.params.id, {
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
    plan.findByIdAndRemove(req.params.id, (error, data) => {
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
