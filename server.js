const { ApolloServer } = require('apollo-server')
const soccerAPI = require('./src/soccerAPI')
const typeDefs = require('./src/typeDefs')
const resolvers = require('./src/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        soccerAPI: new soccerAPI()
    })
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})
