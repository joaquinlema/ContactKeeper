const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please introduce a correct email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
});

module.exports = router;