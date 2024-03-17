'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_benefit', {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del Producto',
      },
      value: {
        type: Sequelize.STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: 'Valor del beneficio de acuerdo al producto',
      },
      benefit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del Beneficio',
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Activo o Inactivo',
      },
      start_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      cip_duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'dias de vigencia del cip',
      },
    });

    // await queryInterface.addPrimaryKey('product_benefit', ['product_id', 'benefit_id']);

    await queryInterface.addConstraint('product_benefit', {
      type: 'primary key',
      name: 'IDX_8D521BAFB517B89', // Puedes darle un nombre personalizado
      fields: ['product_id', 'benefit_id'],
    });

    await queryInterface.addIndex('product_benefit', ['benefit_id']);
    await queryInterface.addConstraint('product_benefit', {
      fields: ['benefit_id'],
      type: 'foreign key',
      name: 'fk_product_benefit_benefit',
      references: {
        table: 'benefit',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('product_benefit', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_product_benefit_product',
      references: {
        table: 'product',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('product_benefit', 'fk_product_benefit_benefit');
    await queryInterface.removeConstraint('product_benefit', 'fk_product_benefit_product');
    await queryInterface.dropTable('product_benefit');
  },
};
