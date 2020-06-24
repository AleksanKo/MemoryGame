document.addEventListener('DOMContentLoaded', function () {
    var cardArray = [
        {
            name: 'bat',
            img: 'images/bat.png'
        },
        {
            name: 'bat',
            img: 'images/bat.png'
        },
        {
            name: 'flamingo',
            img: 'images/flamingo.png'
        },
        {
            name: 'flamingo',
            img: 'images/flamingo.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'koala',
            img: 'images/koala.png'
        },
        {
            name: 'koala',
            img: 'images/koala.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'reindeer',
            img: 'images/reindeer.png'
        },
        {
            name: 'reindeer',
            img: 'images/reindeer.png'
        },
        {
            name: 'seafood',
            img: 'images/seafood.png'
        },
        {
            name: 'seafood',
            img: 'images/seafood.png'
        },
        {
            name: 'penguin',
            img: 'images/penguin.png'
        },
        {
            name: 'penguin',
            img: 'images/penguin.png'
        }
    ];
    cardArray.sort(function () { return 0.5 - Math.random(); });
    var grid = document.querySelector('.grid');
    var resultDisplay = document.querySelector('#result');
    var cardChosen = [];
    var cardsWon = [];
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute('data-id', String(i));
            card.setAttribute('class', 'small-image');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        var optionOneId = cardChosen[0].id;
        var optionTwoId = cardChosen[1].id;
        if (cardChosen[0].name === cardChosen[1].name) {
            cards[optionOneId].setAttribute('src', '');
            cards[optionTwoId].setAttribute('src', '');
            cardsWon.push(cardChosen);
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
            alert('Try again!');
        }
        cardChosen = [];
        resultDisplay.textContent = String(cardsWon.length);
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations';
        }
    }
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardChosen.push({ name: cardArray[Number(cardId)].name, id: Number(cardId) });
        this.setAttribute('src', cardArray[Number(cardId)].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
    createBoard();
});
