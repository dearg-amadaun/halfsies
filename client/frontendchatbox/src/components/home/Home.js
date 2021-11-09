import React from 'react';
import {
  Link
} from "react-router-dom";

const Home = (props) => {
return (
    <div>
       <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
      </form>
      <form>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
      </form>
     <Link to="/profile"> <input type="submit" value="Login" /></Link>
      <button ><Link to="/signup">Signup</Link></button>
    </div>
  )
};

export default Home;