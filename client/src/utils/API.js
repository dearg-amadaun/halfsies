// import axios from 'axios';

// const BASEURL = process.env.REACT_APP_BASEURL;
// const APIKEY = process.env.REACT_APP_APIKEY;

// const search = async (query) =>
//   axios.get(`${BASEURL}${query}${APIKEY}&rating=pg`);


//API LINK

//https://api.yelp.com/v3/businesses/search?term=&location=

export const searchYelp = (query) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${query}&location=${query}`)
};
