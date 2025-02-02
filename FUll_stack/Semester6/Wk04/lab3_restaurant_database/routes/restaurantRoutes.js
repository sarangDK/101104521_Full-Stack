const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Get all restaurants

router.get('/', async (req, res) => {
  try {
    const sortBy = req.query.sortBy;
    let sortOption = {};
    if (sortBy === "ASC") {
      sortOption = { restaurant_id: 1 };
    } else if (sortBy === "DESC") {
      sortOption = { restaurant_id: -1 };
    }

    const restaurants = await Restaurant.find({}, 'restaurant_id  name cuisine city').sort(sortOption);
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get restaurant by cuisine

router.get('/cuisine/:cuisineType', async (req, res) => {
  try {
      const cuisineType = req.params.cuisineType;
      const restaurants = await Restaurant.find({ cuisine: cuisineType });
      res.json(restaurants);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
})
// Get restaurants with Delicatesssen cuisine and NOT in Brooklyn

router.get('/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: 'Delicatessen', city: { $ne: 'Brooklyn' } }).select('name cuisine city').sort({name: 1});
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

  module.exports = router;