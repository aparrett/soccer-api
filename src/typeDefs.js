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
        venue_name: String!
        venue_surface: String
        venue_address: String
        venue_city: String
        venue_capacity: Int
        players: [Player]
    }

    type Player {
        player_id: Int!
        player_name: String!
        firstname: String!
        lastname: String!
        number: Int
        position: String
        age: Int
        birth_date: String
        birth_place: String
        birth_country: String
        nationality: String
    }
`
