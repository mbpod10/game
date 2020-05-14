console.log("Up and running!");

const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];

function checkForMath (){
		if (cardsInPlay[0] === cardsInPlay[1]) {
  			alert("You found a match!");
		} else {
  			alert("Sorry, try again.");
			}
};

function flipCard(cardElement){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMath();
	}
};

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

};

createBoard();






//I hope this workd
/*let cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped " + cardOne + "!");

let cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped " + cardTwo + "!")



if (cardsInPlay.length === 2){
	if (cardOne === cardTwo){
		alert("You have a match!");
	}else{
		alert("Sorry, try again!");
	}
}
*/


