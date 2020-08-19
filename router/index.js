const publicRouter = require('./publicRoutes');
const userRouter = require('./userRouter');
const protect = require('./routerProtect');
const contactRouter = require('./contactRouter');
const tourRouter = require('./tourRouter');
module.exports = {
  publicRouter,
  userRouter,
  protect,
  contactRouter,
  tourRouter
};
