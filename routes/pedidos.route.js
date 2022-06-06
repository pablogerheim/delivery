import express from "express"
import pedidosControler from "../controllers/pedidos.controller.js"

const router = express.Router()

router.post('/', pedidosControler.postRequest) //
router.put('/', pedidosControler.putUpdade) //
router.patch('/', pedidosControler.patchState) //
router.delete('/:id', pedidosControler.deleteRequest) //
router.get('/:id', pedidosControler.getRequest) //
router.post('/historicoCliente', pedidosControler.postHistoryClient)
router.post('/historicoProduto', pedidosControler.postHistoryProduct)
router.get('/maisVendidos/:x', pedidosControler.getBestSellers) //

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${req.message}`)
    res.status(400).send({ error: err.message })
})

export default router