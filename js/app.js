
suitMap = {
  s: '\u2660',
  c: '\u2663',
  h: '\u2665',
  d: '\u2666'
};

window.onload = function(){
  renderTable();
}

function dealCards() {
  //TODO
  // place 5 cards in hand 1 and 4 in hand 2 and last on the table
  for (let i = 0; i < 4; i++) {
    player[nextPlayer].drawCard(deck);
    player[prevPlayer].drawCard(deck);
  }
  player[nextPlayer].drawCard(deck);
  table.placeCard(deck.drawCard());
}

function renderTable() {
  let h1 = document.querySelector('#hand1');
  let h2 = document.querySelector('#hand2');
  let t = document.querySelector('#table');

  for (card of player[0].hand) {
    h1.appendChild(createCardDiv(card));
  }

  for (card of player[1].hand) {
    h2.appendChild(createCardDiv(card));
  }

  t.appendChild(createCardDiv(table.getTopCard()));

  function createCardDiv(card) {
    let cardDiv = document.createElement("div");
    cardDiv.style.color = card.type == 's' || card.type == 'c' ? "black" : "red";
    cardDiv.classList.add('card');
    cardDiv.innerHTML = card.val + suitMap[card.type];
    return cardDiv;
  }
}

let nextPlayer = 0;
let prevPlayer = 1;

let deck = new Deck();
let table = new Table();

let player = [];
player[0] = new Player({ name: 'Bartek' });
player[1] = new Player({ name: 'Agnieszka' })


deck.createNew();

deck.shuffle();

// deck.displayCards();
dealCards();

// console.log('Player 1 cards: ' + player[0].showHand());
// console.log('Player 2 cards: ' + player[1].showHand());
let topcard = table.getTopCard();
// console.log('Table top: ' + topcard.val + suitMap[topcard.type]);