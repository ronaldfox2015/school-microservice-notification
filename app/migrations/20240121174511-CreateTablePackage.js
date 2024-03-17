'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('package', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      package_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del paquete'
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del producto'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Cantidad del producto'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Creación'
      },
      modified_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Modificación'
      }
    });

    await queryInterface.addConstraint('package', {
      fields: ['package_id'],
      type: 'foreign key',
      name: 'fk_product_package_package_id',
      references: {
        table: 'product',
        field: 'id'
      }
    });

    await queryInterface.addConstraint('package', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_product_package_product_id',
      references: {
        table: 'product',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('package');
  }
};