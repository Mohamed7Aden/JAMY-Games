const axios = require(`axios`).default;
const router = require(`express`).Router();

const allGameData = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '1a3958a999msh626d8d771ef20b0p1e89b7jsn52537a78b46c'
    }
  };

  