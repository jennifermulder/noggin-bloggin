const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const dashboardRoutes = require('./dashboard-routes.js');

const apiRoutes = require('./api');

//prefixes routes with " ", "dashboard," "api"
router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use('/api', apiRoutes);
//requested endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;