const User = require('./User');
const SavedGames = require('./savedGames');
const GameDetails = require('./gameDetails');

User.belongsToMany(GameDetails, {
    through: {
        model: SavedGames,
        unique: false
    },
    as: 'my_games'
});
GameDetails.belongsToMany(User, {
    through: {
        model: SavedGames,
        unique: false
    },
    as: 'game_owner'
});

module.exports = { User, SavedGames, GameDetails};
