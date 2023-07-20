const express = require('express');

// ** import individual route files
const authRoute = require('./auth');
const profileRoute = require('./profile');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
];
defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
