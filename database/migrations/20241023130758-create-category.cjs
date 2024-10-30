"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("category", {
      categoryId: {
        type: DataTypes.INTEGER,
        primarKey: true,
        autoIncrement: true,
      },
      categoryName:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      categoryImagePath:{
        type:DataTypes.TEXT,
        allowNull:false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("category");
  },
};
