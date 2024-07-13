const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");
const Team = require('./team.model');
const Player = require('./player.model');
const AuctionHistory = require('./AuctionHistory.model');

const AuctionList = DBconnection.define('auction_list', {
   
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
    auctionid: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
    },
    is_active: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
    },
    is_retained: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
   
    
}, {
    timestamps: false,
    tableName: 'auction_list', // Ensure the correct table name is used
});

AuctionList.belongsTo(Team, { foreignKey: 'teamid' });
AuctionList.belongsTo(Player, { foreignKey: 'playerid' });
AuctionList.belongsTo(AuctionHistory, { foreignKey: 'auctionid' });


module.exports = AuctionList;
