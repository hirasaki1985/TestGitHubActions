import * as express from "express";
import { Express } from "express";
import setApiRouter from "./ApiRouter";


export const getServer = async (): Promise<Express> => {
  /**
   * Express
   */
  const app = express();

  // set api router
  setApiRouter(app);

  return app;
};
