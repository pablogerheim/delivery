import { GraphQLObjectType, GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLFloat } from "graphql";

const Spend = new GraphQLObjectType({
    name: "Spend",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        cliente: {
            type: GraphQLString
        },
        produto: {
            type: GraphQLString
        },
        valor: {
            type: GraphQLFloat
        },
        entregue: {
            type: GraphQLBoolean
        },
        timestamp: {
            type: GraphQLString
        }
    })
})

export default Spend