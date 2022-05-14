const axios = require('axios');
const querystring = require('querystring');

class searchableAPI {
    constructor(token) {
        this.instance = axios.create({
            baseURL: 'https://api.searchablelist.com/',
            headers: { 'x-access-token': token }
        });
    }

    // Return full list of Netflix Movies
    movie({movie} = {}) {
        return this.instance.get(`/movie?${querystring.stringify({areas: movie})}`)
    }

    // Return full list of Netflix Television shows
    tvshows({tvshows} = {}) {
        return this.instance.get(`/tv?${querystring.stringify({areas: tvshows})}`)
    }

    // Return full list of Netflix documentaries
    doc({doc} = {}) {
        return this.instance.get(`/doc?${querystring.stringify({areas: doc})}`)
    }
}

module.exports = searchableAPI;