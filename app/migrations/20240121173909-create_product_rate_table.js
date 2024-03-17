'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_rate', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cost: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
        comment: 'Costo del Producto',
      },
      extra_cost: {
        type: Sequelize.DECIMAL(8, 2),
        comment: 'Extra costo del Producto',
      },
      type: {
        type: Sequelize.STRING(30),
        comment: 'Tipo de Tarifa',
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Activo o Inactivo',
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Id del Producto',
        references: {
          model: 'product',
          key: 'id',
        },
      },
      med_pub_id: {
        type: Sequelize.INTEGER,
        comment: 'Id del Medio de Publicación (Adecsys)',
      },
      cod_med_pub: {
        type: Sequelize.STRING(10),
        comment: 'Código del Medio de Publicación (Adecsys)',
      },
      des_med_pub: {
        type: Sequelize.STRING(100),
        comment: 'Descripción del Medio de Publicación (Adecsys)',
      },
      pub_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Publicación (Adecsys)',
      },
      cod_publicacion: {
        type: Sequelize.STRING(10),
        comment: 'Código de Publicación (Adecsys)',
      },
      dsc_publicacion: {
        type: Sequelize.STRING(20),
        comment: 'Descripción de Publicación (Adecsys)',
      },
      edi_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Edición (Adecsys)',
      },
      cod_edicion: {
        type: Sequelize.STRING(10),
        comment: 'Código de Edición (Adecsys)',
      },
      dsc_edicion: {
        type: Sequelize.STRING(20),
        comment: 'Descripción de Edición (Adecsys)',
      },
      sec_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Sección (Adecsys)',
      },
      cod_seccion: {
        type: Sequelize.INTEGER,
        comment: 'Código de Sección (Adecsys)',
      },
      dsc_seccion: {
        type: Sequelize.STRING(100),
        comment: 'Descripción de Sección (Adecsys)',
      },
      sub_sec_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Sub Sección (Adecsys)',
      },
      cod_subseccion: {
        type: Sequelize.STRING(10),
        comment: 'Código de Sub Sección (Adecsys)',
      },
      dsc_subseccion: {
        type: Sequelize.STRING(100),
        comment: 'Descripción de Sub Sección(Adecsys)',
      },
      ubi_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Ubicación (Adecsys)',
      },
      cod_ubicacion: {
        type: Sequelize.STRING(20),
        comment: 'Código de Ubicación (Adecsys)',
      },
      dsc_ubicacion: {
        type: Sequelize.STRING(100),
        comment: 'Descripción de Ubicación (Adecsys)',
      },
      tar_id: {
        type: Sequelize.INTEGER,
        comment: 'Id de Tarifa (Adecsys)',
      },
      cod_tarifa: {
        type: Sequelize.STRING(20),
        comment: 'Código de Tarifa (Adecsys)',
      },
      dsc_tarifa: {
        type: Sequelize.STRING(100),
        comment: 'Descripción de Tarifa (Adecsys)',
      },
      lunes: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      martes: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      miercoles: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      jueves: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      viernes: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      sabado: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      domingo: {
        type: Sequelize.INTEGER,
        comment: 'Activo o Inactivo (Adecsys)',
      },
      fch_inivigencia: {
        type: Sequelize.DATEONLY,
        comment: 'Fecha de Inicio de Vigencia (Adecsys)',
      },
      fch_finvigencia: {
        type: Sequelize.DATEONLY,
        comment: 'Fecha de Fin de Vigencia (Adecsys)',
      },
      valor_importe: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        comment: 'Valor Importe (Adecsys)',
      },
      tipo_tarifa: {
        type: Sequelize.CHAR(1),
        comment: 'Tipo de Tarifa (Adecsys)',
      },
      dvaltip: {
        type: Sequelize.STRING(20),
        comment: 'Descripción de Tipo (Adecsys)',
      },
      tipo_aviso: {
        type: Sequelize.STRING(20),
        comment: 'Tipo de Aviso (Adecsys)',
      },
      id_producto: {
        type: Sequelize.INTEGER,
        comment: 'Id de Producto (Adecsys)',
      },
      medio_pub: {
        type: Sequelize.STRING(20),
        comment: 'Medio de Publicación (Adecsys)',
      },
      med_id: {
        type: Sequelize.STRING(10),
        comment: 'Id de Medida (Adecsys)',
      },
      estado: {
        type: Sequelize.TINYINT,
        defaultValue: 1,
        comment: 'Estado (Adecsys)',
      },
      cod_grupo_medida: {
        type: Sequelize.INTEGER,
        comment: 'Código de Grupo Medida (Adecsys)',
      },
      des_grupo_medida: {
        type: Sequelize.STRING(100),
        comment: 'Descripción de Grupo Medida (Adecsys)',
      },
      dsc_medida: {
        type: Sequelize.STRING(20),
        comment: 'Descripción de Medidad (Adecsys)',
      },
      principal: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      range_min: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      range_max: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      range_unity: {
        type: Sequelize.STRING(10),
        defaultValue: 'unidad',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.addConstraint('product_rate', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_product_rate_product',
      references: {
        table: 'product',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_rate');
  },
};