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
      it('should Deck Type Object with 78 cards', () => {
        expect(deck).toBeDefined();
        expect(deck.cards.length).toEqual(78);
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