const { RESTDataSource } = require('apollo-datasource-rest')
const config = require('./config')

class soccerAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://v2.api-football.com/'
    }

    willSendRequest(request) {
        request.headers.set('X-RapidAPI-Key', config.API_KEY)
    }

    async getLeagueById(id) {
        const { api } = await this.get(`leagues/league/${id}`)
        return api.results ? api.leagues[0] : null
    }

    async getTeamsByLeagueId(id) {
        const result = await this.get(`teams/league/${id}`)
        return result.api.teams
    }

    async getPlayersByTeamId(id) {
        const result = await this.get(`players/squad/${id}/2019`)
        return result.api.players
    }
}

module.exports = soccerAPI
