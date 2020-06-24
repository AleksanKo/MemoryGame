document.addEventListener('DOMContentLoaded',() => {

    const cardArray: {name: String, img: String}[] = [
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
    ]

    const grid: Element = document.querySelector('.grid')
    let cardChosen: {name: String, id: number}[] = []

    function createBoard(): void {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src','images/blank.jpg')
            card.setAttribute('data-id', String(i))
            card.setAttribute('class','small-image')
            //card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    function flipCard(): void {
        let cardId = this.getAttribute('data-id')
        cardChosen.push({name:cardArray[Number(cardId)].name, id: Number(cardId)})
    }

    createBoard()
})