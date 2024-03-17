'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('purchase_product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      purchase_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id de Compra'
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id de Producto'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Cantidad'
      },
      sub_total: {
        type: Sequelize.DECIMAL(9, 3),
        allowNull: false,
        defaultValue: 0.000,
        comment: 'Sub Total'
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        comment: 'Fecha de Creación'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'modified_at',
        comment: 'Fecha de Modificación'
      }
    });

    await queryInterface.addConstraint('purchase_product', {
      fields: ['purchase_id'],
      type: 'foreign key',
      name: 'fk_purchase_product_purchase',
      references: {
        table: 'purchase',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('purchase_product', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_purchase_product_product',
      references: {
        table: 'product',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('purchase_product', {
      fields: ['parent_id'],
      type: 'foreign key',
      name: 'FK_C890CED4727ACA70',
      references: {
        table: 'purchase_product',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('purchase_product');
  }
};