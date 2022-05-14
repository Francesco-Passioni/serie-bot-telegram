# 🎥 Netflix unofficial Movie, TV Shows & Doc Database API NodeJS🍿 
## Powered by Searchablelist.com

The Netflix unofficial movie, tv shows and documentaries database.

## Installation
```
npm install netflix-unofficial-api --save
```

## Token Access
```
Request access token from api@searchablelist.com with subject: Token ~ Auto response with token key
```

## Basic usage

```
const netflixUnofficialApi = require("netflix-unofficial-api");
const myApiToken = '123412341234';
const netflixData = new netflixData(myApiToken);
netflixData.movie().then(res => {
  console.log({res})
}).catch(e => {
  console.log({e})
})
```

## Available Methods
Return full list of Netflix Movies
```
netflixData.movie()
```

Return full list of Netflix Tv Shows
```
netflixData.tvshows()
```

Return full list of Netflix documentaries
```
netflixData.doc()
```