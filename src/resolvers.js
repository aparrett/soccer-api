module.exports = {
    Query: {
        league: (root, { id }, { dataSources }) => dataSources.soccerAPI.getLeagueById(id)
    },
    League: {
        teams: (parent, _, { dataSources }) => dataSources.soccerAPI.getTeamsByLeagueId(parent.league_id)
    }
}
