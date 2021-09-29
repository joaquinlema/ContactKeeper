const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

//@route GET api/contacts
//@desc get all users contacts
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        res.json(contacts);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
    res.send('get all contacts user');
});

//@route POST api/contacts
//@desc add new 
//@access Private
router.post('/', (req, res) => {
    res.send('add new contact');
});

//@route PUT api/contacts/:id
//@desc update contact 
//@access Private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

//@route DELETE api/contacts/:id
//@desc delete contact 
//@access Private
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;