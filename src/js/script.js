const arrCarrinho = []
let count = 1



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
    bttComprar.id = product.id
    bttComprar.innerText = "Comprar"


    bttComprar.addEventListener('click', () => {
        product.idCarrinho = count
        arrCarrinho.push(product)
        count++
        montarCarrinho(arrCarrinho)
        console.log(arrCarrinho)
    })

    card.append(imagens, texto, bttComprar)
    listaProdutos.append(card)

}

function criaItemCarrinho(item) {

    const itemCarrinho = document.createElement("li")
    itemCarrinho.classList.add("itemCarrinho--li")
    itemCarrinho.id = item.id

    const imgCarrinho = document.createElement("img")
    imgCarrinho.src = item.img
    imgCarrinho.classList.add("itemCarrinho--img")

    const divTextoCarrinho = document.createElement("div")
    divTextoCarrinho.classList.add("divTextoCarrinho")

    const nameTitulo = document.createElement("p")
    nameTitulo.classList.add("itemCarrinho--Produto")
    nameTitulo.innerText = item.nome


    const secaoCar = document.createElement("p")
    secaoCar.classList.add("itemCarrinho--secao")
    secaoCar.innerText = item.secao


    const valorItem = document.createElement("p")
    valorItem.classList.add("valorItem")
    valorItem.innerText = `R$ ${item.preco},00`

    removerProduto = document.createElement("button")
    removerProduto.classList.add("bttRemover")
    removerProduto.innerText = "⛔"
    removerProduto.id = item.id
        /* console.log(removerProduto.id) */


    removerProduto.addEventListener("click", tiraItemCarrinho)


    divTextoCarrinho.append(nameTitulo, secaoCar, valorItem, )
    itemCarrinho.append(imgCarrinho, divTextoCarrinho, removerProduto)
    return itemCarrinho

}

function tiraItemCarrinho(e) {
    /* 
        const indeX = arrCarrinho.filter((element, index, arr) => {
            e.target = arr[index].id
        }) */

    const newItem = arrCarrinho.find(element => {
        return element.id == e.target.id
    })
    const index = arrCarrinho.indexOf(newItem)

    arrCarrinho.splice(index, 1)

    montarCarrinho(arrCarrinho)

}

function retiraItem() {

    const listaCarrinho = document.getElementById("listaItensCarrinho")
    console.log(arrCarrinho)
}



function montarCarrinho(arrCarrinho) {

    const listaCarrinho = document.getElementById("listaItensCarrinho")
    listaCarrinho.innerHTML = ""

    const valorTotal = document.querySelector("#precoTotal")
    valorTotal.innerText = somaTotal(arrCarrinho)

    const quantidadeTotal = document.querySelector("#quantidadeTotal")
    quantidadeTotal.innerText = arrCarrinho.length


    for (let contador = 0; contador < arrCarrinho.length; contador++) {
        const item = arrCarrinho[contador]
        const returnCriaItemCarrinho = criaItemCarrinho(item);
        listaCarrinho.append(returnCriaItemCarrinho)
    }

    console.log(listaCarrinho)
}

function criaImage(product) {
    const image = document.createElement('img')
    image.classList.add("containerListaProdutos--img")
    image.src = product.img
    return image

}

function montaTexto(product) {
    const text = document.createElement('div');

    const name = document.createElement('h3');
    name.classList.add("containerListaProdutos--h3");
    name.innerText = product.nome;


    var valor = document.createElement('p');
    /*  valor.classList.add("containerListaProdutos--p"); */
    valor.classList.add("containerListaProdutos--span")
    valor.innerText = ` R$ ${product.preco},00 `

    var categoria = document.createElement('span');
    categoria.classList.add("containerListaProdutos--span");
    categoria.innerText = ` ${product.secao}`

    const divComponentes = montaComponentes(product.componentes)

    text.append(name, categoria, divComponentes, valor)
    return text
}

function montaComponentes(lista) {
    let ol = document.createElement("ol")
    lista.forEach((element, index) => {
        let item = document.createElement("p")
        item.classList.add("containerListaProdutos--p")
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

    return `R$${result},00`
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




function filtrarTodos(event) {
    const listaTodos = document.querySelector("ul")
    listaTodos.innerHTML = ""
    montarDados(produtos)
}


// barra de pesquisa
function buscarNome() {
    const listaTodos = document.querySelector("ul")
    listaTodos.innerHTML = ""

    const textoPesquisa = document.querySelector(".campoBuscaPorNome").value
    let procura = textoPesquisa.toLowerCase()

    const produtoPesquisado = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(procura.trim()) ||
        produto.categoria.toLowerCase().includes(procura.trim()) ||
        produto.secao.toLowerCase().includes(procura.trim()))

    montarDados(produtoPesquisado)
}

// filtros

const buttonHortFrut = document.querySelector('#botaoFruts')
buttonHortFrut.addEventListener('click', filtrarPorHotifruti)

const buttonTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
buttonTodos.addEventListener('click', filtrarTodos)


const buttonPesquisar = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
buttonPesquisar.addEventListener('click', buscarNome)

const pesquisaInput = document.querySelector(".campoBuscaPorNome")
pesquisaInput.addEventListener('keypress', buscarNome)