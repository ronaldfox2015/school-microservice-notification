// migrations/20240124000000-create_product_table.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'Id del Tipo de Producto',
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
        comment: 'Nombre del Producto',
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Activo o Inactivo',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Creación',
      },
      modified_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Modificación',
      },
      label: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });

    await queryInterface.addIndex('product', ['product_type_id']);
    await queryInterface.addIndex('product', ['parent_id']);
    await queryInterface.addConstraint('product', {
      fields: ['product_type_id'],
      type: 'foreign key',
      name: 'FK_D34A04AD14959723',
      references: {
        table: 'product_type',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('product', {
      fields: ['parent_id'],
      type: 'foreign key',
      name: 'FK_D34A04AD727ACA70',
      references: {
        table: 'product',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('product', 'FK_D34A04AD14959723');
    await queryInterface.removeConstraint('product', 'FK_D34A04AD727ACA70');
    await queryInterface.dropTable('product');
  },
};
