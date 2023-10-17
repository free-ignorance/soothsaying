import * as express from "express";

import { DefaultController } from ".";
import { logger } from "../utils/logger";
import { getCardByID, newDeckDrawThree } from "../models/cards";

class CardController extends DefaultController {
  constructor() {
    super("/cards");
  }

  public initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getCardByID);
    this.router.get(`${this.path}`, this.drawThreeCards);
  }

  /**
   * @description Get a card by ID with a GET request, expects a ID to be passed as Request Params
   * @param {Request} request - Express request object
   * @param {number} request.params.id - ID of the card to get
   * @param {Response} response - Express response object
   */
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

  /**
   * @description Creates a new deck, shuffles it and draws the top 3 cards in the most organic of ways
   * @param {Request} request - Express request object
   * @param {Response} response - Express response object
   */
  private drawThreeCards = (
    request: express.Request,
    response: express.Response
  ) => {
    const cardResponse = this.getDefaultResponse();
    const cards = newDeckDrawThree();
    cardResponse.data = {
      ...cards,
    };
    logger.info(`CardController.drawThreeCards: ${cards[0].name}, ${cards[1].name}, ${cards[2].name}`);
    response.status(200).send(cardResponse);
  }
}

export { CardController };
