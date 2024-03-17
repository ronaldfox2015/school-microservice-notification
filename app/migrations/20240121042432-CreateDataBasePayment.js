'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE DATABASE IF NOT EXISTS db_neo_payment;');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DROP DATABASE db_neo_payment;');
  }
};
