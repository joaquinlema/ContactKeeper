const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');

//@route POST api/users
//@desc Register a user
//@access Public
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please introduce a correct email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ msg: 'User already exist' });
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt); //hash version of password

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        //agrgeamos devolucion de token con expiracion
        jwt.sign(payload, config.get('jwtSecret'),{
            expiresIn: 36000
        }, (err,token) => {
            if(err) throw err;
            res.json({token});
        })
//        res.send('User save');

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }

    //    res.send(req.body);
});

module.exports = router;