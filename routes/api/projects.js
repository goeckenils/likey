const express = require('express')
const router = express.Router()


// @route GET api/projects
// @desc test route
// @access Public 
router.get('/', (req, res) => { res.send('projects route') })


module.exports = router