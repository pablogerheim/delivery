import pedidosService from "../service/pedidos.service.js"

async function postRequest(req, res) {
    try {
        if (req.body.cliente === undefined || req.body.produto === undefined || req.body.valor === undefined) {
            throw new Error("cliente, produto e valor são obrigatórios")
        }
        const data = await pedidosService.createRulesRequest(req.body)
        res.send(JSON.stringify(data))
    } catch (err) {
        res.send("cliente, produto e valor são obrigatórios")
    }
}

async function putUpdade(req, res) {
    try {
        if (req.body.cliente === undefined ||
            req.body.produto === undefined ||
            req.body.valor === undefined ||
            req.body.id === undefined ||
            req.body.entregue === undefined) {
            throw new Error("cliente, produto e valor são obrigatórios")
        }
        const data = await pedidosService.updateRulesRequest(req.body)
        res.send(JSON.stringify(data))
    } catch (err) {
        res.send("id, cliente, produto, valor e entregue são obrigatórios")
    }

}

async function patchState(req, res) {
    try {
        if (req.body.id === undefined) {
            throw new Error("ID é obrigatório")
        }
        const data = await pedidosService.updateDelivered(req.body)
        res.send(JSON.stringify(data))
    } catch (err) {
        res.send("ID é obrigatório")
    }
}

async function deleteRequest(req, res) {
    try {
        if (req.params.id === undefined) {
            throw new Error("ID é obrigatório")
        }
        const anser = await pedidosService.deleteRulesRequest(req.params.id)
        res.send(anser)
    } catch (err) {
        res.send("ID é obrigatório")
    }
}

async function getRequest(req, res) {
    try {
        if (req.params.id === undefined) {
            throw new Error("ID é obrigatório")
        }
        const anser = await pedidosService.searchRulesRequest(req.params.id)
        res.send(anser)
    } catch (err) {
        res.send("ID é obrigatório")
    }
}

async function postHistoryClient(req, res) {
    try {
        if (req.body.cliente === undefined) {
            throw new Error("Cliente é obrigatório")
        }
        const anser = await pedidosService.spendRulesClientRequest(req.body.cliente)
        res.send(anser)
    } catch (err) {
        res.send("Cliente é obrigatório")
    }
}

async function postHistoryProduct(req, res) {
    try {
        if (req.body.produto === undefined) {
            throw new Error("Produto é obrigatório")
        }
        const anser = await pedidosService.spendRulesProductRequest(req.body.produto)
        res.send(anser)
    } catch (err) {
        res.send("Produto é obrigatório")
    }
}

async function getBestSellers(req, res) {
    try {
        if (req.params.x === undefined) {
            throw new Error("numero é obrigatório")
        }
        const anser = await pedidosService.bestSellers(req.params.x)
        res.send(anser)
    } catch (err) {
        res.send("Faill")
    }
}

export default {
    postRequest,
    putUpdade,
    patchState,
    deleteRequest,
    getRequest,
    postHistoryClient,
    postHistoryProduct,
    getBestSellers
}