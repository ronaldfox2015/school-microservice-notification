'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del cliente (Usuario)'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: 'Fecha de Creación'
      },
      modified_at: {
        type: Sequelize.DATE,
        comment: 'Fecha de Modificación'
      },
      total_cost: {
        type: Sequelize.DECIMAL(9, 3),
        allowNull: false,
        defaultValue: '0.000',
        comment: 'Costo Total'
      },
      discount: {
        type: Sequelize.DECIMAL(9, 3),
        allowNull: false,
        defaultValue: '0.000',
        comment: 'descuentos'
      },
      total_tax: {
        type: Sequelize.DECIMAL(9, 3),
        allowNull: false,
        defaultValue: '0.000',
        comment: 'Impuesto Total'
      },
      cart_id: {
        type: Sequelize.STRING(50),
        collate: 'utf8_unicode_ci',
        comment: 'Id del Carro de Compra'
      },
      state: {
        type: Sequelize.STRING(10),
        collate: 'utf8_unicode_ci',
        allowNull: false,
        comment: 'Estado de la compra (to pay, paid, enable, disable)'
      },
      entity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id de la entidad'
      },
      entity_name: {
        type: Sequelize.STRING(50),
        collate: 'utf8_unicode_ci',
        allowNull: false,
        comment: 'Nombre de la entidad (Empresa, Postulante, Institucion Educativa, etc)'
      },
      origin: {
        type: Sequelize.STRING(50),
        collate: 'utf8_unicode_ci',
        allowNull: false,
        comment: 'identifica de que sistema proviene'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchase');
  }
};