const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");

const Team = DBconnection.define('teams', {
   
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobileno: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    no_players: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    team_amount:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    used_amount:{
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
    is_retained: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    
  }, {
    timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt automatically
  });
  

  
  // Export the Team model
  module.exports = Team;