'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: 'Id del usuario'
      },
      name_user: {
        allowNull: false,
        type: Sequelize.STRING(35),
        comment: 'Nombre del usuario'
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: 'Id del Producto',
        references: {
          model: 'product',
          key: 'id'
        }
      },
      remainder: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Saldo de Producto de la Empresa'
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: true,
        comment: 'Fecha de Expiración'
      },
      origin: {
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: 'comprado, bonificado o membresia'
      },
      purchase_product_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: 'el id de la compra del producto'
      }
    });

    await queryInterface.addIndex('user_product', ['product_id']);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_product');
  }
};
