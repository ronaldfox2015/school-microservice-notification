'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase_payment_pos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      purchase_payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'purchase_payment',
          key: 'id'
        }
      },
      voucher_number: {
        type: Sequelize.STRING(15),
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      bank_name: {
        type: Sequelize.STRING(100),
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      card_type: {
        type: Sequelize.STRING(50),
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      batch_number: {
        type: Sequelize.STRING(50),
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      call_center_id: {
        type: Sequelize.INTEGER,
        defaultValue: null
      }
    });

    await queryInterface.addConstraint('purchase_payment_pos', {
      fields: ['purchase_payment_id'],
      type: 'foreign key',
      name: 'fk_purchase_payment_pos_purchase_payment',
      references: {
        table: 'purchase_payment',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchase_payment_pos');
  }
};