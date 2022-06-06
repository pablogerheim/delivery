import { GraphQLSchema, GraphQLObjectType } from "graphql";
import spendQueries from "./queries/spend.queries.js";
import spendMutations from "./mutations/spend.mutations.js";

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...spendQueries
        }
    }),
    mutation: new GraphQLObjectType({
        name: "RootMutation",
        fields: {
            ...spendMutations
        }
    }),
})

export default Schema;