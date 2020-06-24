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
    var grid = document.querySelector('.grid');
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute('data-id', String(i));
            card.setAttribute('class', 'small-image');
            //card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }
    function flipCard() {
    }
    createBoard();
});
