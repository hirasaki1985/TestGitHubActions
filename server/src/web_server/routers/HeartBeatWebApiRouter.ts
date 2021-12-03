import * as express from "express";
import {HTTP_STATUS_CODE} from "../../const/HttpStatusCodeConst";

const router: express.Router = express.Router();

/**
 * heart beat
 */
router.get('/heartbeat', (req: express.Request, res: express.Response) => {
  res.status(HTTP_STATUS_CODE.OK).send("");
});


export default router;