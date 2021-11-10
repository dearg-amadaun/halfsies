import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
        _id
        profileAuthor
        about
        restaraunt
        match
      }
    }
  }
`;

// export const ADD_ABOUT = gql``

// export const ADD_RESTARAUNT = gql``

// export const ADD_MATCH = gql``

// export const ADD_COMMENT = gql``


// export const REMOVE_PROFILE = gql``

// export const REMOVE_ABOUT = gql``

// export const REMOVE_RESTARAUNT = gql``

// export const REMOVE_MATCH = gql``

// export const REMOVE_COMMENT = gql``