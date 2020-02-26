const express = require('express');
const config = require('dotenv');
config.config();
const app = express();
const PORT = process.env.PORT || 3333;
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('./config/connection');
const {
  publicRouter,
  userRouter,
  contactRouter,
  tourRouter,
  actingServiceRouter,
  newsAndEventsRouter
} = require('./router');
const protect = require('./router/routerProtect');

app.use(cors());
app.use(bodyParser.json());

function startApp() {
  try {
    app.listen(PORT, () => {
      console.log('App Connected on Port : ', PORT);
    });
    connect();
  } catch (err) {
    console.log('App Start Error : ', err);
  }
}
//API Routing
app.use('/api/v1', publicRouter);
app.use('/api/v1/users', protect, userRouter);
app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/actingService', actingServiceRouter);
app.use('/api/v1/newsAndEvents', newsAndEventsRouter);

module.exports = { startApp, express };
