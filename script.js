const winx = [
  'winx/aisha.png',
  'winx/bloom.png',
  'winx/daphne.png',
  'winx/flora.png',
  'winx/ice.png',
  'winx/musa (1).png',
  'winx/roxy (1).png',
  'winx/stella.png',
  'winx/stormy (1).png',
  'winx/aisha.png',
  'winx/bloom.png',
  'winx/daphne.png',
  'winx/flora.png',
  'winx/ice.png',
  'winx/musa (1).png',
  'winx/roxy (1).png',
  'winx/stella.png',
  'winx/stormy (1).png',
]

/*Configurando o número de pares (numberOfPairs) que deseja ter no jogo. 
A função Array.from gera um array chamado allCards que contém os caminhos das imagens da Winx duplicadas de acordo com o número de pares. 
A função flat() é usada para achatar o array multidimensional gerado por Array.from. */
const numberOfPairs = 18
const allCards = Array.from(
  { length: numberOfPairs },
  (_, index) => winx[index % winx.length]
).flat()

/*Criando uma cópia do array de cartas (allCards) e embaralhando-o usando o método sort com uma função de comparação que gera números aleatórios. */
const shuffleWinx = [...allCards].sort(() => Math.random() - 0.5)

let openCards = []

/* usando um loop for para criar elementos div representando as cartas do jogo. 
Dentro de cada carta, você adiciona uma imagem (img) com um estilo definido para largura e altura. 
Essas cartas são adicionadas ao elemento com a classe .game no HTML. */
for (let i = 0; i < winx.length; i++) {
  let box = document.createElement('div')
  box.className = 'item'

  // Criar elemento de imagem
  let img = document.createElement('img')
  img.src = shuffleWinx[i]
  img.alt = 'Winx Image'

  img.style.width = '120px'
  img.style.height = '120px'

  // Adicionar a imagem ao contêiner
  box.appendChild(img)

  box.onclick = handleClick
  document.querySelector('.game').appendChild(box)
}

/* Manipular o clique nas cartas, verificar se há correspondência entre as cartas abertas e determinar se o jogador venceu o jogo. */
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen')
    openCards.push(this)
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500)
  }

  console.log(openCards)
}

function checkMatch() {
  if (
    openCards[0].querySelector('img').src ===
    openCards[1].querySelector('img').src
  ) {
    openCards[0].classList.add('boxMatch')
    openCards[1].classList.add('boxMatch')
  } else {
    openCards[0].classList.remove('boxOpen')
    openCards[1].classList.remove('boxOpen')
  }

  openCards = []

  if (document.querySelectorAll('.boxMatch').length === winx.length) {
    openModal()
  }
}

function openModal() {
  document.getElementById('victoryModal').style.display = 'block'
}

function closeModal() {
  document.getElementById('victoryModal').style.display = 'none'
}
