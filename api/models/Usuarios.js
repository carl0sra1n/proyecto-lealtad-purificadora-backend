/**
 * Usuarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      unique: true,
      required: true
    },
  },

};

