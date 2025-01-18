const express = require('express')
const Email = require('../models/email.model.js')
const router = express.Router();
const {create, getAllEmails,updateEmail,deleteEmail} = require('../controllers/email.controller.js');


router.post('/add-email', create);

router.get('/', getAllEmails);

router.put('/:email', updateEmail);

router.delete('/:email', deleteEmail);

module.exports = router;