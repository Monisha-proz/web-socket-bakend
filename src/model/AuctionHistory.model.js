const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");
const Team = require('./team.model');
const Player = require('./player.model');

const AuctionHistory = DBconnection.define('auction_history', {
    
    uuid: {
        type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    playerid: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    teamid: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    value: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    year: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    is_active: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
    },
    
}, {
    timestamps: false,
    tableName: 'auction_history', // Ensure the correct table name is used
});

AuctionHistory.belongsTo(Team, { foreignKey: 'teamid' });
AuctionHistory.belongsTo(Player, { foreignKey: 'playerid' });


module.exports = AuctionHistory;
