//Simulaçao de adiçao de itens de pedido
//Selecione todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');
// Seleciona a lista onde os itens do pedido serão exibidos

const listaPedido = document.getElementById('lista-pedido');

//Seleciona o elemento que exibira o valor total do pedido
const totalElemento = document.getElementById('total');

//Cria variavel que armazena o total do pedido
let total = 0;

// Percorrer todos os botoes 'Adicionar' e adicionar um evento de clique em cada um 
botoesAdicionar.forEach((botao)=> {
    botao.addEventListener('click', ()=> {
        const produto = botao.parentElement;

        // Obtém o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        //Obtém o preço do produto,removendo o texto "R$" e converter o valor para decimal
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",''));

        //Obtém um novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido =document.createElement('li');

        itemPedido.textContent = ${nome} - R$ ${preco.toFixed(2)};
        //Adicionar o item criado a lista de pedidos
        listaPedido.appendChild(itemPedido);

        //Atualiza o total da compra 
        total += preco;

        totalElemento.textContent = Total: R$ ${total.toFixed(2)};

        



    });

});