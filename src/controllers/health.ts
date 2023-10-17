import * as express from "express";

import { DefaultController } from "./";
import { health } from "../models";

class HealthCheckController extends DefaultController {
  constructor() {
    super("/health");
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getHealthCheck);
  }

  private getHealthCheck = (
    request: express.Request,
    response: express.Response
  ) => {
    const checkResponse = this.getDefaultResponse();
    const healthCheck = health.getHealthCheck();
    checkResponse.data = {
        ...healthCheck,
    };
    response.status(200).send(checkResponse);
  };
}

export { HealthCheckController };
