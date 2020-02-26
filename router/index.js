const publicRouter = require('./publicRoutes');
const userRouter = require('./userRouter');
const protect = require('./routerProtect');
const contactRouter = require('./contactRouter');
const tourRouter = require('./tourRouter');
const actingServiceRouter = require('./actingServiceRouter');
const newsAndEventsRouter = require('./newsAndEventsRouter');
module.exports = {
  publicRouter,
  userRouter,
  protect,
  contactRouter,
  tourRouter,
  actingServiceRouter,
  newsAndEventsRouter
};
