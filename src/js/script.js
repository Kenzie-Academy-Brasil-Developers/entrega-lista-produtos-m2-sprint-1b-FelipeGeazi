function montarDados(listaProdutos) {
    for (let contador = 0; contador < listaProdutos.length; contador++) {
        const product = listaProdutos[contador];
        montaCard(product, listaProdutos);

    }
    somaTotal(listaProdutos)
}

montarDados(produtos)


function montaCard(product, listaProduto) {

    const listaProdutos = document.querySelector("ul")
    listaProdutos.classList.add("containerListaProdutos")

    const card = document.createElement("li")
    card.classList.add("containerListaProdutos")

    const imagens = criaImage(product)
    const texto = montaTexto(product)

    const valorTotal = document.querySelector("#precoTotal")
    valorTotal.innerText = somaTotal(listaProduto)

    card.append(imagens, texto)
    listaProdutos.append(card)

}





function criaImage(product) {
    const image = document.createElement('img')
    image.classList.add("containerListaProdutos")
    image.src = product.img
    return image

}

function montaTexto(product) {
    const text = document.createElement('div');

    const name = document.createElement('h3');
    name.classList.add("containerListaProdutos");
    name.innerText = product.nome;


    var valor = document.createElement('p');
    valor.classList.add("containerListaProdutos");
    valor.innerText = ` R$ ${product.preco},00 `
        /* const valorNumero = parseInt(valor) */


    var categoria = document.createElement('span');
    categoria.classList.add("containerListaProdutos");
    categoria.innerText = ` ${product.secao}`

    text.append(name, valor, categoria)
    return text

}

function somaTotal(listaProdutos) {
    let result = 0
    for (let i = 0; i < listaProdutos.length; i++) {
        result += listaProdutos[i].preco
    }

    return `${result},00`
}




// filtrando por secao com filter
function filtrarPorHotifruti() {
    const listaProdutos = document.querySelector("ul")
    listaProdutos.innerHTML = ""

    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })
    montarDados(listaHortifruti)

}

//filtrarPorHotifruti()
//adicionando o event listener de clique e executando a função filter
const buttonHortFrut = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')

buttonHortFrut.addEventListener('click', filtrarPorHotifruti)



function filtrarTodos(event) {
    const listaTodos = document.querySelector("ul")
    listaTodos.innerHTML = ""

    montarDados(produtos)


}

const buttonTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
buttonTodos.addEventListener('click', filtrarTodos)



function buscarNome() {
    const textoPesquisa = document.querySelector(".campoBuscaPorNome").value
    console.log(textoPesquisa.toLowerCase())

}


const buttonPesquisar = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
console.log(buttonPesquisar)
buttonPesquisar.addEventListener('click', buscarNome)