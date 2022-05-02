const express = require('express')
const router = express.Router()
const path = require('path')
const authConstroller = require('../controllers/authController')

router.post('/', authConstroller.handleLogin)

module.exports = router