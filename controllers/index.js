const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const authRoutes = require('./auth')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/auth', authRoutes)
//router.use('/dashboard', dashboardRoutes);

module.exports = router;
