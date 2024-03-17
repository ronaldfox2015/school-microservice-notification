'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product_type', [
      { id: 1, name: 'Avisos', active: 1 },
      { id: 2, name: 'Paquetes', active: 1 },
      { id: 3, name: 'Extracargo', active: 1 }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product_type', null, {});
  }
};
