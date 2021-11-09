const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  about: 
    {
      required: "Please tell us about yourself!",
      type: String,
      trim: true,
    },
  restaraunt:
    {
      type: String,
      trim: true
    },
  match:
    {
      type: String,
      trim: true
    },
    profileAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  });

const Profile = model('Profile', profileSchema);

module.exports = Profile;
