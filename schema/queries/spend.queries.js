import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import Spend from "../types/spend.type.js";
import SpendService from "../../service/pedidos.service.js";

const spendQueries = {
    searchRulesRequest: {
        type: Spend,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => SpendService.searchRulesRequest(args.id)
    },
    bestSellers: {
        type: new GraphQLList(GraphQLString),
        args: {
            x: {
                name: "x",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => SpendService.bestSellers(args.x)
    },
}

export default spendQueries