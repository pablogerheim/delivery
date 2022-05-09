<h1 align="center"> Delivery </h1>

<h2 align="center"> Descrição </h2>
<p> Objetivo deste projeto é a pratica, os métodos utilizados são GET, POST, PUT, PATCH, DALETE passando informação através do body e da URL e assim conseguindo cadastrar, modificar, deletar e fazer estatísticas dos pedidos. <p/>

<h2 align="center"> Funcionalidades e demonstração </h2>
<p> Caminhos https <p/> 
  
<p> Caminho 1- pedidos/ -> cria um pedido mas precisa preencher os campos obrigatórios que são cliente, produto, valor os demais são preenchidos automaticamente. <p/>  
<p> Caminho 2- pedidos/ -> atualiza o pedido através do id os campos “cliente”, “produto”, “valor” e “entregue” são alterados. <p/>  
<p> Caminho 3- pedidos/ -> atualiza o pedido para entregue. <p/>  
<p> Caminho 4- pedidos/:id -> exclui 1 pedido através do id. <p/>  
<p> Caminho 5- pedidos/:id -> consulta 1 pedido através do id. <p/>  
<p> Caminho 6- pedidos/historicoCliente -> através do cliente retorna a soma total das compras já realizadas. <p/>  
<p> Caminho 7- pedidos/historicoPedido -> através do produto retorna a soma total das vendas já realizadas. <p/>  
<p> Caminho 8- pedidos/maisVendidos/:x -> através de x(numero qualquer exemplo: 3) retorna as mais vendidas: [“Pizza A - 30”, “Pizza B – 27”, “Pizza C – 25”]<p/>  


Estrutura {
    id -> nextId
    cliente -> cliente
    produto -> pizza
    valor -> 10.50
    timestamp -> newDate()
    entregue -> false
}

<h2 align="center"> Tecnologias utilizadas </h2>
<p> Node.js, Express, Insomnia <p/>