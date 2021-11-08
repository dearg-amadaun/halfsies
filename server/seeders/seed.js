const db = require('../config/connection');
const { User, Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('Users and Profiles seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
