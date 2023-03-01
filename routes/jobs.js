const router = require('express').Router()
const jobsCtrl = require('../controllers/jobs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

router.get('/', jobsCtrl.index)
router.get('/:id', jobsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/create', checkAuth, jobsCtrl.create)
router.put('/:id', checkAuth, jobsCtrl.update)
router.delete('/:id', checkAuth, jobsCtrl.deleteJob)



module.exports = router