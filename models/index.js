const User = require('./User');
const SavedGames = require('./savedGames');
const Game_details = require('./gameDetails');

User.belongsToMany(Game_details, {
    through: {
        model: SavedGames,
        unique: false
    },
    as: 'my_games'
});
Game_details.belongsToMany(User, {
    through: {
        model: SavedGames,
        unique: false
    },
    as: 'game_owner'
});

module.exports = { User, SavedGames, Game_details };
