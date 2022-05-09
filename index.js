import express from "express"
import router from "./routes/pedidos.route.js";

const app = express()
app.use(express.json());
app.use("/pedidos", router);
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})