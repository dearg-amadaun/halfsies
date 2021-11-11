//API LINK
//https://api.yelp.com/v3/businesses/search?term=&location=

// export default { 
//   searchYelp : function (food, area) {
//   return fetch(`https://api.yelp.com/v3/businesses/search?term=${food}&location=${area}`)
//   }
// };

const searchYelp = (food, area) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${food}&location=${area}`)
  }


export default searchYelp;
