import React from 'react';
import {
  Link
} from "react-router-dom";

const Signup = (props) => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
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
      <form>
        <label>
          Pronoun:
          <input type="text" name="pronoun" />
        </label>
      </form>
      <Link to="/profile"> <input type="submit" value="signup" /></Link>
    </div>
  )
};

export default Signup;