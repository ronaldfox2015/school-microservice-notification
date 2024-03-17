// migrations/20240121000000-create_customer_company_table.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_company', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      document_type: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: 'Tipo de Documento',
      },
      document_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: 'Número de Documento',
      },
      trade_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'Razón Social',
      },
      via: {
        type: Sequelize.STRING(25),
        allowNull: false,
        comment: 'Vía (Jr, Av, Ca, etc.)',
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'Dirección',
      },
      door_number: {
        type: Sequelize.STRING(10),
        allowNull: false,
        comment: 'Número de Puerta',
      },
      entity_code: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Código de la Empresa en Adecsys',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_company');
  },
};
