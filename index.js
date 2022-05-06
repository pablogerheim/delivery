import express from "express"
import router from "./routes/pedidos.route.js";

const app = express()
app.use(express.json());
//app.use(cors()) - adicionar o cros para poder acessar de outras portas
//app.use(express.static("public")) - relembrar para que serve
//app.use("/doc",swaggerUI.server,swaggerUI.setup(swaggerDocument)) - explicar como funciona a api
app.use("/pedidos", router);
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})