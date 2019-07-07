const { model, Schema } = require('mongoose');

const PersonSchema = new Schema({
  id: {
    type: String,
  },

  name: {
    type: String,
  },
});

module.exports = model('Person', PersonSchema, 'persons');
