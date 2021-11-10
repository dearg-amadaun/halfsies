import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIKEY = process.env.REACT_APP_APIKEY;

const search = async (query) =>
  axios.get(`${BASEURL}${query}${APIKEY});


export default { search };

https://api.yelp.com/v3/businesses/search? term= {{VARIABLE_FOOD_SEARCh_TERM}} &location= {{VARIABLE_USER_LOCATION}}
