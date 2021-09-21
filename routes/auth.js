const express = require('express');
const router = express.Router();

//@route GET api/auth
//@desc get logged user
//@access Private
router.get('/', (req, res) => {
    res.send('get loggin user');
});

//@route POST api/auth
//@desc auth user
//@access Public
router.post('/', (req, res) => {
    res.send('logg in user');
});

module.exports = router;