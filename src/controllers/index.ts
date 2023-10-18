import * as express from "express";

import { logger } from "../utils/logger";

class DefaultController {
    public path = "/";
    public router = express.Router();

    constructor(path: string, router?: express.Router) {
        this.path = path;
        this.router = router || express.Router();
    }

    public logRequest = (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => {
        logger.info(`${request.method} ${request.path}`);
        next();
    }

    public initializeRoutes() {}
    
    public getDefaultResponse() {
        return {
            data: {},
            meta: {
                status: 200,
            }
        };
    }

    public getSlackResponse() {
        return {
            response_type: "in_channel",
            text: "",
          };
    }
}

  export { DefaultController }