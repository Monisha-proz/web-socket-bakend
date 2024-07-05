const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");

const Team = DBconnection.define('teams', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    no_players: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    profile_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
    
  }, {
    timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt automatically
  });
  

  
  // Export the Team model
  module.exports = Team;