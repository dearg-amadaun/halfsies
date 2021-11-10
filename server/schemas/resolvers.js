const { AuthenticationError } = require('apollo-server-express');
const { User, Profile} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('profile');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('profile');
    },
    profiles: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Profile.find(params).sort({ createdAt: -1 });
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('profile');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    },

    addProfile: async (parent, { profileAuthor, about, restaraunt, match }, context) => {
      if (context.user) {
        const profile = await Profile.create({
          profileAuthor, about, restaraunt, match
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { profiles: profile._id } }
        );

        return profile;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addAbout: async (parent, { profileId, about }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { about: about },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addRestaraunt: async (parent, { profileId, restaraunt }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { restaraunts: restaraunt },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    
    addMatch: async (parent, { profileId, match }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { matches: match },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addComment: async (parent, { profileId, commentText }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeProfile: async (parent, { profileId }, context) => {
      if (context.user) {
        const profile = await Profile.findOneAndDelete({
          _id: profileId,
          ProfileAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { profiles: profile._id } }
        );

        return profile;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeAbout: async (parent, { profileId, about }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { about: about } },
        { new: true }
      );
    },
    removeRestaraunt: async (parent, { profileId, restaraunt }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { restaraunts: restaraunt } },
        { new: true }
      );
    },
    removeMatch: async (parent, { profileId, match  }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { matches: match } },
        { new: true }
      );
    },

    removeComment: async (parent, { profileId, commentId }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

