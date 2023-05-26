const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        codeimprove: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = [
                    {id:1, name:'abc', email:'abc@gmail.com',phone:8095473576},
                    {id:2, name:'xyz', email:'xyz@gmail.com',phone:8095473577}
                ]

                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({query: RootQuery})