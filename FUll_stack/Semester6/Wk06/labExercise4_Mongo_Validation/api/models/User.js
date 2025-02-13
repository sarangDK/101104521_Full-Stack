const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  username: {
    type: String,
    required: true,
    minlength: [4, 'Username must be at least 4 characters long']
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, 'City must contain only alphabets and spaces']
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, 'Zip Code must follow 12345-1234 format']
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true }
    }
  },
  phone: {
    type: String,
    required: true,
    match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone number must follow 1-123-123-1234 format']
  },
  website: {
    type: String,
    required: true,
    match: [/^(https?:\/\/)[^\s$.?#].[^\s]*$/, 'Invalid URL format']
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }
});

module.exports = mongoose.model('User', userSchema);
