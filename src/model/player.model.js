const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");

const Teams = require('./team.model')

const Players = DBconnection.define(
  "Players",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    action: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    match_count: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    profile_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    teamid: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
   
  },
  {
    timestamps: false,
  }
);
Teams.hasMany(Players, { foreignKey: 'teamid' });

Players.belongsTo(Teams, { foreignKey: 'teamid' });


module.exports = Players;