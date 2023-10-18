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
    this.router.post(`${this.path}/slack`, this.drawThreeCardsSlack);
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

  private drawThreeCardsSlack = (
    request: express.Request,
    response: express.Response
  ) => {
    const cardResponse = this.getSlackResponse();
    const cards = newDeckDrawThree();
    const slackResponse = {
        blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Very interesting, <@${request.query.user_id}>. Let's see what the cards have to say... :crystal_ball:`
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Your Past card is *${cards[0].name}*, \n ${cards[0].description}`
          },
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: `${cards[0].name}`
          },
          block_id: "past_card_image",
          image_url: `${cards[0].cardImages[0].url.small}`,
          alt_text: `${cards[0].cardImages[0].alt}`
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Your Present card is *${cards[1].name}* \n ${cards[1].description}`
          }
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: `${cards[1].name}`
          },
          block_id: "present_card_image",
          image_url: `${cards[1].cardImages[0].url.small}`,
          alt_text: `${cards[1].cardImages[0].alt}`
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Your Future card is *${cards[2].name}* \n ${cards[2].description}`
          }
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: `${cards[2].name}`
          },
          block_id: "future_card_image",
          image_url: `${cards[2].cardImages[0].url.small}`,
          alt_text: `${cards[2].cardImages[0].alt}`
        }
      ]
    };
    logger.info(`CardController.drawThreeCardsSlack: ${cards[0].name}, ${cards[1].name}, ${cards[2].name}`);
    response.status(200).send(slackResponse);
  }
}

export { CardController };
