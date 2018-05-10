class Table {
  constructor(args) {
    this.cards = [];
  }

  placeCard(card) {
    this.cards.push(card);
  }

  getTopCard() {
    return this.cards[this.cards.length-1];
  }
}