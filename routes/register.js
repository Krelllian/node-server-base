const express = require('express')
const router = express.Router()
const path = require('path')
const reqisterController = require('../controllers/registerController')

router.post('/', reqisterController.handleNewUser)

module.exports = router