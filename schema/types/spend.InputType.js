import { GraphQLInputObjectType, GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLObjectType } from "graphql";

const SpendInput = new GraphQLInputObjectType({
    name: "SpendInput",
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
        }
    })
})
export default SpendInput