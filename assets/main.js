let quoteText = document.querySelector('p')
let button = document.querySelector('button')

const quotes = [
  'Seja como for o que penses, creio que é melhor dizê-lo com boas palavras. -  William Shakespeare ',
  'Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções. - Pequena Sereia ',
  'Não creio, no sentido filosófico do termo, na liberdade do homem. Todos agem não apenas sob um constrangimento exterior mas também de acordo com uma necessidade interior. - Albert Einstein',
  'Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos. - Maquiavel ',
  'Creio que tenho prova suficiente de que falo a verdade: a pobreza. - Sócrates ',
  'Creio que quase sempre é preciso um golpe de loucura para se construir um destino. - Marguerite Yourcenar' // 6
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length))
    return quoteText.innerHTML = quotes[randomNumber];
}

newQuote()

button.addEventListener('click', newQuote)