import * as readline from 'readline';


console.log(("Welcome to The TypesScript Casino."));
console.log(("You are playing Blackjack.\n"));

type Entry = {
  tld: number;
  name: string;
  value: number;
};

const deck: Entry[] = [
  {tld: 1, name: 'Ace of Clubs ♣', value: 11},
  {tld: 2, name: 'Two of Clubs ♣', value: 2},
  {tld: 3, name: 'Three of Clubs ♣', value: 3},
  {tld: 4, name: 'Four of Clubs ♣', value: 4},
  {tld: 5, name: 'Five of Clubs ♣', value: 5},
  {tld: 6, name: 'Six of Clubs ♣', value: 6},
  {tld: 7, name: 'Seven of Clubs ♣', value: 7},
  {tld: 8, name: 'Eight of Clubs ♣', value: 8},
  {tld: 9, name: 'Nine of Clubs ♣', value: 9},
  {tld: 10, name: 'Ten of Clubs ♣', value: 10},
  {tld: 11, name: 'Jack of Clubs ♣', value: 10},
  {tld: 12, name: 'Queen of Clubs ♣', value: 10},
  {tld: 13, name: 'King of Clubs ♣', value: 10},
  {tld: 14, name: 'Ace of Diamonds ♦', value: 11},
  {tld: 15, name: 'Two of Diamonds ♦', value: 2},
  {tld: 16, name: 'Three of Diamonds ♦', value: 3},
  {tld: 17, name: 'Four of Diamonds ♦', value: 4},
  {tld: 18, name: 'Five of Diamonds ♦', value: 5},
  {tld: 19, name: 'Six of Diamonds ♦', value: 6},
  {tld: 20, name: 'Seven of Diamonds ♦', value: 7},
  {tld: 21, name: 'Eight of Diamonds ♦', value: 8},
  {tld: 22, name: 'Nine of Diamonds ♦', value: 9},
  {tld: 23, name: 'Ten of Diamonds ♦', value: 10},
  {tld: 24, name: 'Jack of Diamonds ♦', value: 10},
  {tld: 25, name: 'Queen of Diamonds ♦', value: 10},
  {tld: 26, name: 'King of Diamonds ♦', value: 10},
  {tld: 27, name: 'Ace of Hearts ♥', value: 11},
  {tld: 28, name: 'Two of Hearts ♥', value: 2},
  {tld: 29, name: 'Three of Hearts ♥', value: 3},
  {tld: 30, name: 'Four of Hearts ♥', value: 4},
  {tld: 31, name: 'Five of Hearts ♥', value: 5},
  {tld: 32, name: 'Six of Hearts ♥', value: 6},
  {tld: 33, name: 'Seven of Hearts ♥', value: 7},
  {tld: 34, name: 'Eight of Hearts ♥', value: 8},
  {tld: 35, name: 'Nine of Hearts ♥', value: 9},
  {tld: 36, name: 'Ten of Hearts ♥', value: 10},
  {tld: 37, name: 'Jack of Hearts ♥', value: 10},
  {tld: 38, name: 'Queen of Hearts ♥', value: 10},
  {tld: 39, name: 'King of Hearts ♥', value: 10},
  {tld: 40, name: 'Ace of Spades ♠', value: 11},
  {tld: 41, name: 'Two of Spades ♠', value: 2},
  {tld: 42, name: 'Three of Spades ♠', value: 3},
  {tld: 43, name: 'Four of Spades ♠', value: 4},
  {tld: 44, name: 'Five of Spades ♠', value: 5},
  {tld: 45, name: 'Six of Spades ♠', value: 6},
  {tld: 46, name: 'Seven of Spades ♠', value: 7},
  {tld: 47, name: 'Eight of Spades ♠', value: 8},
  {tld: 48, name: 'Nine of Spades ♠', value: 9},
  {tld: 49, name: 'Ten of Spades ♠', value: 10},
  {tld: 50, name: 'Jack of Spades ♠', value: 10},
  {tld: 51, name: 'Queen of Spades ♠', value: 10},
  {tld: 52, name: 'King of Spades ♠', value: 10}
];

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (52 - 1 + 1)) + min;

function hit(): number {
    return randomInt(1, 52);
}

const dealer_hand = [deck[hit()], deck[hit()]];
const player_hand = [deck[hit()], deck[hit()]];

console.log("Dealer: " + dealer_hand[0]['name'] + " and a hidden card.\n");
console.log("Player: " + player_hand[0]['name'] + " and " + player_hand[1]['name'] + ".\n");

function calculateScore(hand: Entry[]): number {
    let score = 0;
    for (let card of hand) {
        score += card.value;
    }
    return score;
}

let player_total = calculateScore(player_hand);
let dealer_total = calculateScore(dealer_hand);
let player_playing = true;

console.log("Player's total score: " + player_total + "\n");

if (player_total === 21) {
    console.log("Blackjack! Player wins!");
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function dealer_hit(): void {
  console.log("Dealer hits.\n")
  dealer_hand.push(deck[hit()]);
  console.log(dealer_hand[dealer_hand.length - 1]['name'] + "\n")
  dealer_total = calculateScore(dealer_hand)
  console.log("Dealer's total score: " + dealer_total + '\n')
  check_game_dealer()
}

function player_hit(): void {
  console.log("\nHit me!\n");
  player_hand.push(deck[hit()]);
  console.log(player_hand[player_hand.length - 1]['name'] + "\n");
  player_total = calculateScore(player_hand)
  console.log("Player's total score: " + player_total + '\n')
  check_game_player()
}

function check_ace_player(): void {
  for (let hand = 0; hand < player_hand.length; hand++) {
    if (player_hand[hand]['value'] === 11) {
        player_hand[hand]['value'] = 1
        player_total = calculateScore(player_hand)
        console.log(`Ace changes to 1. Total score now: ${player_total}\n`)
        check_game_player()
    }
  }
}

function check_ace_dealer(): void {
  for (let hand = 0; hand < dealer_hand.length; hand++) {
    if (dealer_hand[hand]['value'] === 11) {
        dealer_hand[hand]['value'] = 1
        dealer_total = calculateScore(dealer_hand)
        console.log(`Ace changes to 1. Total score now: ${dealer_total}\n`)
        check_game_dealer()
    }
  }
}

function check_game_player(): void {
  if (player_total > 21) {
    check_ace_player()
    if (player_total > 21) {
      console.log("Player bust!")
    }
  }
  else if (player_total < 21) {
    play()
  }
  else if (player_total === 21) {
    console.log("Blackjack! Player wins.")
  }
}

function check_game_dealer(): void {
  if (dealer_total > 21) {
    check_ace_dealer()
    if (dealer_total > 21) {
      console.log("Dealer bust!")
    }
  }
  else if (dealer_total < player_total) {
    dealer_hit()
  }
  else if (dealer_total === 21) {
    console.log("Dealer Blackjack! Dealer wins.")
  }
  else if (dealer_total === player_total) {
    console.log("Tie.")
  }
  else {
    console.log("Dealer wins.")
  }
}

function player_stand(): void {
  console.log("\nStand.\n");
  dealer_play()
}

function dealer_play(): void {
  console.log("Dealer's cards: " + dealer_hand[0]['name'] + " and " + dealer_hand[1]['name'])
  console.log("\nDealers total score: " + dealer_total + '\n')
  if (dealer_total < player_total) {
    dealer_hit()
  }
}


function play(): void {
    rl.question("Hit or Stand? Type hit or stand: ", function(answer) {
        if (answer.toLowerCase() === "hit") {
          player_hit()
        }
        else if (answer.toLowerCase() === "stand") {
            console.log("\nStand.\n");
            console.log("Dealer's cards: " + dealer_hand[0]['name'] + " and " + dealer_hand[1]['name'])
            console.log("\nDealers total score: " + dealer_total + '\n')
            if (dealer_total > player_total) {
              console.log("Dealer wins.")
            }
            else {
              dealer_hit()
            }
        }
        });
}

play();