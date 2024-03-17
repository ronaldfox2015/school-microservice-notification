'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase_adecsys_code', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id de Compra',
        references: {
          model: 'purchase',
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id de Producto',
        references: {
          model: 'product',
          key: 'id'
        }
      },
      adecsys_code: {
        type: Sequelize.STRING(255),
        collate: 'utf8_unicode_ci',
        comment: 'Código de Adecsys',
        defaultValue: null
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchase_adecsys_code');
  }
};
