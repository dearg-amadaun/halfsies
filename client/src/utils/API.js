const SearchYelp = (term, location) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`)
  }
export default SearchYelp;
