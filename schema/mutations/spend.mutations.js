import { GraphQLInt, GraphQLBoolean, GraphQLString } from "graphql";
import SpendInput from "../types/spend.InputType.js";
import Spend from "../types/spend.type.js";
import SpendService from "../../service/pedidos.service.js";

const spendMutations = {
    createRulesRequest: {
        type: Spend,
        args: {
            spend: {
                name: "spend",
                type: SpendInput
            }
        },
        resolve: (_, args) => {
            let { cliente, produto, valor } = args.spend
            return SpendService.createRulesRequest({ cliente, produto, valor })
        }
    },
    deleteRulesRequest: {
        type: GraphQLBoolean,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => SpendService.deleteRulesRequest(args.id)
    },
    updateRulesRequest: {
        type: Spend,
        args: {
            spend: {
                name: "spend",
                type: SpendInput
            }
        },
        resolve: (_, args) => SpendService.updateRulesRequest(args.spend)
    },
    updateDelivered: {
        type: Spend,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => {
            let { id } = args
            return SpendService.updateDelivered({ id })
        }
    },
    spendRulesClientRequest: {
        type: GraphQLString,
        args: {
            cliente: {
                name: "spend",
                type: GraphQLString
            }
        },
        resolve: (_, args) => {
            let { cliente } = args
            return SpendService.spendRulesClientRequest(cliente)
        }
    },
    spendRulesProductRequest: {
        type: GraphQLString,
        args: {
            produto: {
                name: "spend",
                type: GraphQLString
            }
        },
        resolve: (_, args) => {
            let { produto } = args
            return SpendService.spendRulesProductRequest(produto)
        }
    }
}

export default spendMutations