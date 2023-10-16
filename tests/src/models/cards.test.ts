import {
  newDeck, getCardByID
} from '../../../src/models/cards';

describe('/models', () => {
  describe('/cards.ts', () => {
    describe('newDeck', () => {
      let deck = newDeck();
      beforeEach(() => {
        let deck = newDeck();
      });
      it('should be a Deck Type Object with 78 cards', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.length).toEqual(78);
      });
      it('should have 22 Major Arcana in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.type === "major").length).toEqual(22);
      });
      it('should have 56 Minor Arcana in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.type === "minor").length).toEqual(56);
      });
      it('should have 14 Wands in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.suit === "wands").length).toEqual(14);
      });
      it('should have 14 Cups in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.suit === "cups").length).toEqual(14);
      });
      it('should have 14 Swords in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.suit === "swords").length).toEqual(14);
      });
      it('should have 14 Pentacles in New Deck', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.filter(card => card.suit === "pentacles").length).toEqual(14);
      });
    });
    describe('getCardByID', () => {
      let deck = newDeck();
      beforeEach(() => {
        let deck = newDeck();
      });
      it('should get the first card', () => {
        const card = getCardByID(0);
        expect(card).toBeDefined();
        expect(card).toEqual(deck.cards[0]);
      });
    });
  });
});