import * as express from "express";
import helmet from "helmet"; // Security updates 

import { logger } from "./utils/logger";

import { DefaultController } from "./controllers";
import { cors } from "./middleware";
import { HealthCheckController } from "./controllers/health";
import { CardController } from "./controllers/cards";

const PORT = process.env.PORT || 3000;

class App {
    public app: express.Application;

    constructor(controllers: DefaultController[]) {
        logger.info(`Initializing Server...`);
        this.app = express.default();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(PORT, () => {
            logger.info(`Server Initialized and Listening on the port ${PORT}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        logger.info(`Initializing Middlewares...`);
        this.app.use(helmet()); // adds xss and other security out of box
        this.app.use(express.json());
        this.app.use(cors.corsMiddleware);
    }

    private initializeControllers(controllers: DefaultController[]) {
        controllers.forEach((controller) => {
            logger.info(`Initializing Controller "${controller.path}" Route...`);
            this.app.use("/", controller.router);
            controller.initializeRoutes();
        });
    }
}

const app = new App([
    new HealthCheckController(),
    new CardController(),
]);

app.listen();