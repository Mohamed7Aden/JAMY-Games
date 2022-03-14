const { User, SavedGames, Game_details } = require('../../models');
const axios = require('axios').default;

const router = require("express") .Router()

router.post ("/save" , async (req, res) => {
    try {
        let oneGameDetails = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {id: req.body.game_id},
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': '1a3958a999msh626d8d771ef20b0p1e89b7jsn52537a78b46c'
            }
          };
          axios.request(oneGameDetails).then( async function (response) {
        await Game_details.create({...response.data, game_id: req.body.game_id});
        const newRelationship = await SavedGames.create({
            user_id: req.session.user_id, 
            game_details_id: parseInt(req.body.game_id)
        }, {fields: ["user_id", "game_details_id"]})  
    res.json(newRelationship)
    })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    })
module.exports = router