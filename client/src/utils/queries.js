import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profiles {
          _id
          name
          about
          createdAt
      }
    }
  }
`;

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      _id
      name
      about
      match
      profileAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query getSingleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      about
      restaraunt
      match
      profileAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
