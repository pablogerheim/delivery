import express from "express"
import router from "./routes/pedidos.route.js";
import { graphqlHTTP } from "express-graphql";
import Schema from "./schema/index.js";

const app = express()
app.use(express.json());
app.use("/pedidos", router);
app.use("/graphql", graphqlHTTP({
    schema: Schema,
    graphiql: true
}))
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})