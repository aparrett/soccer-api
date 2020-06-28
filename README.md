# soccer-api
A GraphQL wrapper on a soccer (football) REST API. The REST API documentation can be found [here](https://www.api-football.com/documentation#teams-data-requests). **Beware: this API has outdated data. Teams and rosters may not be up-to-date.**

FYI: The product API Key in Production is limited to 100 requests per day and requests can add up quickly since one GraphQL query can mean multiple requests.

### Local Installation
To run in local, you need to set up a .env file with your own API key from the api-football website. You will be limited to 100 requests per day.

```
# .env
API_KEY=insert_api_key_here
```

### Intended Use
This project is currently only being used for learning how to wrap a REST API with GraphQL but feel free to make PRs, comment suggestions, or use the API. Do not use this in a production environment. 

### Useful queries

Get all of the nested data for each team in a league

```
{
  league(id: 2){
    league_id,
    teams {
      name
      venue_name
      venue_surface
      venue_address
      venue_city
      venue_capacity 
      players {
        player_id
        player_name
        number
        lastname
        number
        position
        age
        birth_date
        birth_place
        birth_country
        nationality
      }
    }
  }
}
```