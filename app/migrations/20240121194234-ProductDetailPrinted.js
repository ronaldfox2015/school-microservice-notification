'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prod_detail_printed', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      purchase_product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('prod_detail_printed', {
      fields: ['purchase_product_id'],
      type: 'foreign key',
      name: 'FK_2390204849B73190',
      references: {
        table: 'purchase_product',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prod_detail_printed');
  },
};