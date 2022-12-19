const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   color: {
      type: String
   }
});

module.exports = mongoose.model('category', categorySchema);