import heartBeatRouter from './routers/HeartBeatWebApiRouter';
import {Express} from "express";

const setApiRouter = (app: Express) => {
  app.use('/api', heartBeatRouter);
};

export default setApiRouter;
