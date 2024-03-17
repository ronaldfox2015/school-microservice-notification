'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase_payment', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Id de Compra'
      },
      cip: {
        type: Sequelize.STRING(255),
        collate: 'utf8_unicode_ci',
        allowNull: true,
        comment: 'Cip de Pago Efectivo'
      },
      token: {
        type: Sequelize.STRING(255),
        collate: 'utf8_unicode_ci',
        allowNull: true,
        comment: 'Token de Pago'
      },
      payment_type: {
        type: Sequelize.STRING(255),
        collate: 'utf8_unicode_ci',
        allowNull: true,
        comment: 'Método de Pago (mc, visa, pe, etc)'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: 'Fecha de Creación'
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Expiración'
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Activo o Inactivo'
      },
      status: {
        type: Sequelize.STRING(255),
        collate: 'utf8_unicode_ci',
        allowNull: true,
        comment: 'Estado del Pago (to pay, paid, etc)'
      },
      paid_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    await queryInterface.addConstraint('purchase_payment', {
      fields: ['purchase_id'],
      type: 'foreign key',
      name: 'fk_purchase_payment_purchase',
      references: {
        table: 'purchase',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchase_payment');
  }
};
