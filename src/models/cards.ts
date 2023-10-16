

/**
 * Tarot Card
 */

export interface Card {
  id: number;
  name: string;
  description: string;
  type: string; // major or minor Arcana
  orientation: boolean; // true = upright or  false = reversed
  // meanings: {
  //   keywords: {
  //     positive: string[];
  //     negative: string[];
  //   };
  //   negative_past: string;
  //   negative_present: string;
  //   negative_future: string;
  //   positive_past: string;
  //   positive_present: string;
  //   positive_future: string;
  // };
  // element: string; // fire, water, air, earth
  // numerology: string; 
  // astrology: string; 
  // planet: string;
  // timing: string;
  cardImages: CardImage[];
}

export interface CardImage {
  id: number;
  label: string;
  alt: string;
  url: string;
  cardId: number;
}

/**
 * Tarot Deck
 */
export interface Deck {
  cards: Card[];
}

/**
 * Tarot Spread
 */
export interface Spread {
  id: string;
  name: string;
  description: string;
  cards: Card[];
}

