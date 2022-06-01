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
    card.classList.add("itemListaCard")

    const imagens = criaImage(product)
    const texto = montaTexto(product)

    const bttComprar = document.createElement("button")
    bttComprar.classList.add("bttComprar")
    bttComprar.innerText = "Comprar"

    const valorTotal = document.querySelector("#precoTotal")
    valorTotal.innerText = somaTotal(listaProduto)

    card.append(imagens, texto, bttComprar)
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


    const divComponentes = montaComponentes(product.componentes)



    text.append(name, categoria, divComponentes, valor)
    return text

}


/* function montaComponentes(lista) {
    let ol = document.createElement("ol")
    for (let i = 0; i < lista.length; i++) {
        let item = document.createElement("p")
        item.innerText = lista[i]
        console.log(lista[i])
        ol.append(item)
    }
    return ol


}
 */
//  mesma coisa que em cima 👇👇👇👇👇👇

function montaComponentes(lista) {
    let ol = document.createElement("ol")
    lista.forEach((element, index) => {
        let item = document.createElement("p")
        item.innerText = `${index + 1}. ${element}`
        ol.append(item)
    });
    return ol
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

/* function filtrarPanificacao() {
    const listaProdutos = document.querySelector("ul")
    listaProdutos.innerHTML = ""

    const listaPani = produtos.filter((produto) => {
        return produto.secao === 'Panificadora'
    })
    montarDados(listaPani)

}

function filtrarLaticio() {
    const listaProdutos = document.querySelector("ul")
    listaProdutos.innerHTML = ""

    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao === 'Laticínio'
    })
    montarDados(listaLaticinio)

} */

//filtrarPorHotifruti()
//adicionando o event listener de clique e executando a função filter
const buttonHortFrut = document.querySelector('#botaoFruts')
buttonHortFrut.addEventListener('click', filtrarPorHotifruti)

/* const buttonPani = document.querySelector('#botaoPanificadora')
buttonHortFrut.addEventListener('click', filtrarPanificacao)

const buttonLaticinio = document.querySelector('#botaoLaticinios')
buttonHortFrut.addEventListener('click', filtrarLaticio) */



function filtrarTodos(event) {
    const listaTodos = document.querySelector("ul")
    listaTodos.innerHTML = ""

    montarDados(produtos)


}

const buttonTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
buttonTodos.addEventListener('click', filtrarTodos)


// barra de pesquisa
function buscarNome() {
    const listaTodos = document.querySelector("ul")
    listaTodos.innerHTML = ""

    const textoPesquisa = document.querySelector(".campoBuscaPorNome").value
    let procura = textoPesquisa.toLowerCase()

    const produtoPesquisado = produtos.filter((produto) => produto.nome.toLowerCase() === procura)


    montarDados(produtoPesquisado)

}
const buttonPesquisar = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
buttonPesquisar.addEventListener('click', buscarNome)