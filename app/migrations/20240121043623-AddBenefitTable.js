'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('benefit', [
      { id: 1, name: 'Dias de publicación', format: '%d dias de publicación', code: 'days_pub', type: 'feature', active: 1 },
      { id: 2, name: 'Filtros Disponibles', format: '', code: 'filters_availables', type: 'feature', active: 1 },
      { id: 3, name: 'Ubicación en el listado de búsqueda', format: 'Ubicación %s en el listado de búsqueda', code: 'location_search_results', type: 'feature', active: 1 },
      { id: 4, name: 'Aviso en portada', format: 'Aviso en Home de Aptitus.com por %d dias', code: 'view_home', type: 'feature', active: 1 },
      { id: 5, name: 'Con logo corporativo', format: '', code: 'company_logo', type: 'feature', active: 1 },
      { id: 6, name: 'Look & Feel', format: '', code: 'look_feel', type: 'feature', active: 1 },
      { id: 7, name: 'Destaque por días en el listado de búsqueda', format: 'Destaque por %d días en el listado de búsqueda', code: 'highlight_results', type: 'feature', active: 1 },
      { id: 8, name: 'Descuento Lanzamiento', format: '', code: 'dscto', type: 'discount', active: 1 },
      { id: 9, name: 'Botón de postulación en listado', format: 'Botón de postulación en listado', code: 'postulation_button', type: 'feature', active: 0 },
      { id: 10, name: 'Días de vigencia', format: '%d días de vigencia', code: 'validity_days', type: 'feature', active: 1 }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('benefit', null, {});
  }
};