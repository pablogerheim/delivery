import pedidosRepository from "../repository/pedidos.repository.js"

async function createRulesRequest({ cliente, produto, valor }) {
    const data = await pedidosRepository.readFileFunction()
    let pedido = {
        "id": data.nextId,
        "cliente": cliente,
        "produto": produto,
        "valor": valor,
        "entregue": false,
        "timestamp": new Date
    }
    data.nextId++
        data.pedidos.push(pedido)
    await pedidosRepository.writeFileFunction(data)
    return pedido
}

async function updateRulesRequest({ id, cliente, produto, valor, entregue }) {
    const data = await pedidosRepository.readFileFunction()
    let pedido = data.pedidos.find(pedido => pedido.id === id)
    if (pedido === undefined) { return "pedido Não encontrado" } else {
        pedido.cliente = cliente
        pedido.produto = produto
        pedido.valor = valor
        pedido.entregue = entregue
        await pedidosRepository.writeFileFunction(data)
        return pedido
    }
}

async function updateDelivered({ id }) {
    const data = await pedidosRepository.readFileFunction()
    let pedido = data.pedidos.find(pedido => pedido.id === id)
    if (pedido === undefined) { return "pedido Não encontrado" } else {
        pedido.entregue = true
        await pedidosRepository.writeFileFunction(data)
        return pedido
    }
}

async function deleteRulesRequest(id) {
    const data = await pedidosRepository.readFileFunction()
    data.pedidos = data.pedidos.filter(pedido => pedido.id !== parseInt(id))
    await pedidosRepository.writeFileFunction(data)
    return `pedido ${id} foi removido`
}

async function searchRulesRequest(id) {
    const data = await pedidosRepository.readFileFunction()
    let pedido = data.pedidos.filter(pedido => pedido.id === parseInt(id))
    return pedido[0]
}

async function spendRulesClientRequest(cliente) {
    const data = await pedidosRepository.readFileFunction()
    data.pedidos = check(data)
    let pedidosCliente = data.pedidos.filter(pedido => pedido.cliente === cliente)
    if (pedidosCliente.length === 0) { return 0 } else {
        let valueSpend = 0
        pedidosCliente.forEach(element => {
            valueSpend += element.valor
        });
        return `O valor gasto por ${cliente} foi R$: ${valueSpend}`
    }
}

async function spendRulesProductRequest(produto) {
    const data = await pedidosRepository.readFileFunction()
    let valueSpend = helperValuePizza(data, produto)
    let helperProduto = data.pedidos.find(p => p.produto)
    return `O valor vendido de ${produto} foi R$: ${valueSpend*helperProduto.valor}`
}

async function bestSellers(params) {
    const data = await pedidosRepository.readFileFunction()
    let arrBestSelleres = helper(data)
    let anser = []
    let format = []
    for (let i = 0; i < params; i++) {
        anser.push(arrBestSelleres[i])
    }
    anser.forEach(({ pizza, valor }) => {
        format.push(`${pizza} - ${valor}`)
    });
    return format
}

function helperValuePizza(data, pizza) {
    let checkArr = check(data)
    let pedidosproduto = checkArr.filter(pedido => pedido.produto === pizza)
    if (pedidosproduto.length === 0) { return 0 } else {
        let valueSpend = 0
        pedidosproduto.forEach(element => {
            valueSpend++
        });
        return valueSpend
    }
}

function helper(data) {
    let arrTypesPizza = []
    let anser = []
    data.pedidos.forEach(item => {
        if (arrTypesPizza.includes(item.produto)) {} else { arrTypesPizza.push(item.produto) }
    })
    data.pedidos = check(data)
    arrTypesPizza.forEach(pizza => {
        anser.push({
            pizza: pizza,
            valor: helperValuePizza(data, pizza)
        })
    })
    anser = anser.sort((a, b) => b.valor - a.valor)
    return anser
}

function check(data) {
    let checkArr = data.pedidos.filter(pedido => pedido.entregue === true)
    return checkArr
}


export default {
    createRulesRequest,
    updateRulesRequest,
    updateDelivered,
    deleteRulesRequest,
    spendRulesClientRequest,
    spendRulesProductRequest,
    bestSellers,
    searchRulesRequest
}