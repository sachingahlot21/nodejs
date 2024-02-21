const express = require('express');
const User = require('../models/user')
const {handleGetAllUsers , handleUpdateUsers} = require('../controllers/user')
const router = express.Router();

router.post('/' , handleUpdateUsers)

router.get('/' , handleGetAllUsers)

module.exports = router


