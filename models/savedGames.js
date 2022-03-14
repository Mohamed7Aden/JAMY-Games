const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedGames extends Model {};

SavedGames.init(
    {
        game_detail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: `user`,
                key: `id`,
                unique: false
            }
        },
        game_details_id: {
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
