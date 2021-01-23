const { ApolloServer, gql } = require('apollo-server')

//it is a graphql Query that returns a type string. 
const typeDefs = gql`
    type Query {
        greeting: String, 
    }
`;

//This is called to resolve the typedef query
const resolvers  = {
    Query: {
        greeting: () => 'Hello GraphQl World'
    }
}

console.log(typeDefs)

const server  = new ApolloServer({typeDefs, resolvers});
server.listen({port:9000}).then(({url}) =>  console.log(`serveris running at ${url}`))








