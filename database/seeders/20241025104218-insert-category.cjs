'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('category',[
    {
      categoryName:"Electronic",
      categoryImagePath:"../path"
    },
    {
      categoryName:"Stationary",
      categoryImagePath:"../path"
    },
    {
      categoryName:"Croccery",
      categoryImagePath:"../path"
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete("category", null,{});
  }
};
