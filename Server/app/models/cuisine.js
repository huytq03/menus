var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CuisineSchema   = new Schema({
    id: { type: Number, required: true, unique: true },
    name:  { type: String, required: true },
    dishes: Number,
  	description: String,
    image: String
});

module.exports = mongoose.model('Cuisine', CuisineSchema);