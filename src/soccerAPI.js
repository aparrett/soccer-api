const { RESTDataSource } = require('apollo-datasource-rest')

class soccerAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://www.api-football.com/demo/v2/'
    }

    async getLeagueById(id) {
        const result = await this.get(`leagues/league/${id}`)
        return result.api.leagues[0]
    }

    async getTeamsByLeagueId(id) {
        const result = await this.get(`teams/league/${id}`)
        return result.api.teams
    }
}

module.exports = soccerAPI
