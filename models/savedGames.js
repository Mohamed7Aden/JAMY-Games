const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedGames extends Model {};

SavedGames.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `user`,
                key: `id`,
                unique: false
            }
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `game_details`,
                key: `id`,
                unique: false
            }
        }
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'saved_games',
      }
);

module.exports = SavedGames;
