//allowing API to be scalable
const router = require('express').Router();
//collecting packaged group of API endpoints
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


//prefixes w/ /users; /posts
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


//packaged up routes to be used in Server.Js
module.exports = router;