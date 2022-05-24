function montaCard(product) {
    const listaProdutos = document.querySelector("ul")
    listaProdutos.classList.add("containerListaProdutos")

    const card = document.createElement("li")
    card.classList.add("containerListaProdutos")

    const imagens = criaImage(product)
    const texto = montaTexto(product)



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


    const valor = document.createElement('p');
    valor.classList.add("containerListaProdutos");
    valor.innerText = `R$ ${product.preco},00`

    const categoria = document.createElement('span');
    categoria.classList.add("containerListaProdutos");
    categoria.innerText = `Seção - ${product.secao}`

    text.append(name, valor, categoria)
    return text


}





function montarDados(listaFrutas) {
    for (let contador = 0; contador < listaFrutas.length; contador++) {
        const product = listaFrutas[contador];
        montaCard(product);
        console.log(montaCard)
    }

}
montarDados(produtos)