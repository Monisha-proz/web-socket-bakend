const { DataTypes, Model } = require("sequelize");
const DBconnection = require("../../dbConfig");

const User = DBconnection.define('users', {
   
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    email: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    password: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    token: {
        type: DataTypes.TEXT('long'),
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
  module.exports = User;