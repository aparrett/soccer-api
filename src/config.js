if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config()
}

const config = {
    API_KEY: process.env.API_KEY
}

module.exports = config
