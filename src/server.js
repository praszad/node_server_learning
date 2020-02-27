import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import connect from './config/connection';
import protect from './router/routerProtect';
import {
  publicRouter,
  userRouter,
  contactRouter,
  tourRouter,
  actingServiceRouter,
  newsAndEventsRouter
} from './router';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.json());

export default function startApp() {
  try {
    app.listen(PORT, () => {
      console.log('App Connected on Port : ', PORT);
    });
    connect();
  } catch (err) {
    console.log('App Start Error : ', err);
  }
}
const url = '/api/v1';
//API Routing
app.use(url, publicRouter);
app.use(url + '/users', protect, userRouter);
app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/actingService', actingServiceRouter);
app.use('/api/v1/newsAndEvents', newsAndEventsRouter);
