
import * as express from "express";
import { DefaultController } from "./";
import { logger } from "../utils/logger";
import { getCardByID } from "../models/cards";

class CardController extends DefaultController {
  constructor() {
    super("/card");
  }

  public initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getCardByID);
  }

  private getCardByID = (
    request: express.Request,
    response: express.Response
  ) => {
    const cardResponse = this.getDefaultResponse();
    const id = parseInt(request.params.id);
    const card = getCardByID(id-1);
    cardResponse.data = {
        ...card,
    };
    logger.info(`CardController.getCardByID: ${card.name}`);
    response.status(200).send(cardResponse);
  };
}

export { CardController };
