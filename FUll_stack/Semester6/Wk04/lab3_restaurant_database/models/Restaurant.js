const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name : {type: String, required: true},
  restaurantid : {type: String, required: true, unique: true },
  cuisine: {type: String, required: true },
  city: {type: String, required: true}
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;