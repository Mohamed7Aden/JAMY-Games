const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game_details extends Model {};

Game_details.init(
    {
    game_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    },
    thumbnail: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    developer: {
        type: DataTypes.STRING
    },
    short_description: {
        type: DataTypes.STRING
    },
    game_url: {
        type: DataTypes.STRING
    },
    platform: {
        type: DataTypes.STRING
    },
    publisher: {
        type: DataTypes.STRING
    },
    release_date: {
        type: DataTypes.STRING
    },
    freetogame_profile_url: {
        type: DataTypes.STRING
    },
    },
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game_details',
      }
);

module.exports = Game_details;
