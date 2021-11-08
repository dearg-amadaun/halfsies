import React from 'react';
import blank from '../images/blank.png';

const Match = (props) => {
return (
    <div>
      <img className="profPic" alt="usersPhoto" src={blank}></img>
      <div>
        <h3>User's Name</h3>
        <h4>User's Pronoun</h4>
      </div>
      <h4>User's Tag Line</h4>
      <ul>
        <h4>User's Top 5</h4>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <button className="skip">Skip</button>
      <button className="match">Match</button>
    </div>
  )
};

export default Match;