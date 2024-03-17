'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('benefit', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
        comment: 'Nombre del beneficio'
      },
      format: {
        type: Sequelize.STRING(300),
        comment: 'Formato para mostrar'
      },
      code: {
        type: Sequelize.STRING(30),
        comment: 'Código interno'
      },
      type: {
        type: Sequelize.STRING(50),
        comment: 'Tipo (feature, discount)'
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Activo o Inactivo'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('benefit');
  }
};
