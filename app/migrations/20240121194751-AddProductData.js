'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    const options = { timeZone: 'America/Lima', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = currentDate.toLocaleString('es-PE', options);

    await queryInterface.bulkInsert('product', [
      { id: 27, product_type_id: 1, name: 'Premium', active: 1, created_at: formattedDate, modified_at: '2023-02-15 21:05:14', label: 'PREMIUM', parent_id: null },
      { id: 28, product_type_id: 1, name: 'Destacado', active: 1, created_at: formattedDate, modified_at: '2023-02-15 21:05:14', label: 'DESTACADO', parent_id: null },
      { id: 29, product_type_id: 1, name: 'Simple', active: 1, created_at: formattedDate, modified_at: '2023-02-15 21:05:14', label: 'SIMPLE', parent_id: null },
      { id: 30, product_type_id: 1, name: 'Gratis', active: 1, created_at: formattedDate, modified_at: '2023-02-15 21:05:14', label: 'GRATIS', parent_id: null },
      { id: 31, product_type_id: 2, name: 'Combo 5', active: 1, created_at: formattedDate, modified_at: null, label: 'COMBO 5', parent_id: null },
      { id: 32, product_type_id: 2, name: 'Combo 10', active: 1, created_at: formattedDate, modified_at: null, label: 'COMBO 10', parent_id: null },
      { id: 33, product_type_id: 2, name: 'Combo 20', active: 1, created_at: formattedDate, modified_at: null, label: 'COMBO 20', parent_id: null },
      { id: 33, product_type_id: 2, name: 'Combo Personalizado', active: 1, created_at: formattedDate, modified_at: null, label: 'COMBO PERSONALIZADO', parent_id: null },
      { id: 34, product_type_id: 3, name: 'Avisos Similares', active: 1, created_at: formattedDate, modified_at: null, label: '<strong>Avisos Similares -</strong>Aparecer por tipo de vehículo, marca/modelo o precio.', parent_id: null },
      { id: 35, product_type_id: 3, name: 'Redes Sociales', active: 1, created_at: formattedDate, modified_at: null, label: '<strong>Redes Sociales - </strong>Tu aviso aparecerá en un post de Facebook e Instagram.', parent_id: null },
      { id: 36, product_type_id: 3, name: 'Boletines', active: 1, created_at: formattedDate, modified_at: null, label: '<strong>Boletines - </strong>Tu aviso aparecerá en un boletín.', parent_id: null },
      { id: 37, product_type_id: 3, name: 'Avisos Impresos Comercio', active: 1, created_at: formattedDate, modified_at: null, label: '<strong>Avisos Impresos - </strong>Aparecerá en los clasificados El Comercio.', parent_id: null },
      { id: 38, product_type_id: 3, name: 'Avisos Impresos Trome', active: 1, created_at: formattedDate, modified_at: null, label: '<strong>Avisos Impresos- </strong>Aparecerá en los clasificados Trome.', parent_id: null }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('product', null, {});
  }
};
