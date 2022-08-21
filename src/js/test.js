// Passo 1: Esconde o botão de start
let cardPikachu = {
    name: 'Pikachu',
    role: 'jungle',
    imageRole : '../src/img/role/Position_Plat-Jungle.png',
    image: '../src/img/pikachu.png' ,
    description: 'Os Pikachus são pequenos roedores de quarenta centímetros e de seis quilogramas, com um corpo redondo, pernas curtas e uma longa cauda, quando macho, a cauda tem um formato de um raio, mas se o Pikachu for fêmea sua cauda ganha um coração na ponta.'
}

let cardCharizard = {
    name: 'Charizard',
    role:'mid',
    imageRole:'../src/img/role/Position_Plat-Mid.png',
    image:'../src/img/charizard.png',
    description:'Geralmente, um Charizard é competitivo. Ele adora a batalha e seu espírito competitivo também é notável, uma vez que nunca vai cuspir fogo em um inimigo mais fraco a menos que provocado ou ordenado. Quando fica muito irritado, as chamas em sua cauda se tornam branco-azuladas.'
}

let cardMewtwo = {
    name:'MewTwo',
    role:'top',
    imageRole:'../src/img/role/Position_Plat-Tid.png',
    image:'../src/img/mewtwo.png',
    description: 'Mewtwo foi criado geneticamente em um laboratório, sendo um clone do misterioso antigo Pokémon Mew. É uma criatura com uma postura humanóide, mas tem algumas características felinas.'
}

// let cardCharizard = {
//     name:,
//     role:,
//     imageRole:,
//     image:,
//     description:
// }

let cards = [cardPikachu, cardCharizard, cardMewtwo];
let selectedCard;
const btnForward = document.getElementById('btn-forward');
const btnBack = document.getElementById('btn-back');
let currentCard = 0;

function startCardList() {
    document.getElementById('start-card').style.display = 'none';
    document.getElementById('lol-slider').style.display = 'flex';
    showCards(currentCard);
}


function showCards() {
    selectedCard = cards[currentCard];

    let information = document.getElementById('information');
    let name = `<h2 class="name">${selectedCard.name}</h2>`;
    let role = `<div class = "information-role">
        <img src="${selectedCard.imageRole}" alt="${selectedCard.role}" class="image-role">
        <p class="role">${selectedCard.role}</p>
    </div>`

    information.innerHTML = name + role;

    let containerImage = document.getElementById('container-image');
    let image = `<img src="${selectedCard.image}" class="lol-image" alt="${selectedCard.name}">`;
    containerImage.innerHTML = image;

    let description = document.getElementById('description');
    let titleDescription = `<h3 class="title">Descrição</h3>`
    let textDescription = `<p class="text">${selectedCard.description}</p>`;
    description.innerHTML = titleDescription + textDescription;
}

function hideSelectedCard() {
    const selectedCard = document.querySelector('.selected')
    selectedCard.classList.remove('selected');
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add('selected');
}

btnForward.addEventListener('click', function (){
    // if(currentCard === cards.length - 1) {
    //     currentCard = -1;
    // };

    hideSelectedCard();

    currentCard++;
    showCard(currentCard);

});

btnBack.addEventListener('click', function (){
    // if(currentCard === 0) {
    //     currentCard = 3;
    // }
    
    hideSelectedCard();

    currentCard--;
    showCard(currentCard);
});