class Player {
  constructor(args) {
    // this.hand = new Hand();
    this.hand = [];
    this.points = 0;
    this.name = args.name || 'Unknown';
  }

  drawCard(deck) {
    this.hand.push(deck.drawCard());
  }

  showHand() {
    let res = [];
    for (let c of this.hand) {
      res.push(c.val + suitMap[c.type]);
    }
    return res.join(', ');
  }

  placeCard() {

  }
}