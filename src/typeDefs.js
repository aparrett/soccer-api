const { gql } = require('apollo-server')

module.exports = gql`
    type Query {
        league(id: Int!): League
    }
    type League {
        league_id: Int!
        teams: [Team]!
    }
    type Team {
        team_id: Int!
        name: String!
    }
`
