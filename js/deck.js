class Deck {
  constructor(args) {

    this.cards = [];

    this.suitMap = {
      s: '\u2660',
      c: '\u2663',
      h: '\u2665',
      d: '\u2666'
    };
  }

  createNew() {
    let vals = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let types = ['s', 'c', 'h', 'd'];
    for (let t of types) {
      for (let v of vals) {
        this.cards.push({ val: v, type: t });
      }
    }
  }

  displayCards() {
    for (let card of this.cards) {
      console.log(card.val + this.suitMap[card.type]);
    }
  }

  shuffle() {
    let oldDeck = this.cards;
    let newDeck = [];
    let card = null;
    let i;

    do {
      i = Math.floor(Math.random() * oldDeck.length);
      newDeck.push(oldDeck.splice(i, 1)[0]);
    } while (oldDeck.length != 0);

    this.cards = newDeck;
  }

  drawCard() {
    return this.cards.pop();
  }
}