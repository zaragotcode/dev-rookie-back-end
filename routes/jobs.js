const router = require('express').Router()
const jobsCtrl = require('../controllers/jjobs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.put('/', jobsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.put('/', checkAuth, jobsCtrl.createJob)


module.exports = router