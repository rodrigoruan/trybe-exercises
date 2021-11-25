'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'A volta dos que n foram',
          author: 'Rodrigo R',
          pageQuantity: 30,
        },
      ],
      {}
    ),

  down: async (queryInterface, _Sequelize) =>
    queryInterface.bulkDelete('Books', null, {}),
};
