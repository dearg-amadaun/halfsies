import React from 'react';
import blank from '../images/blank.png';
import '../match/match.css'

const Match = (props) => {
  return (
    <div className="matchpage">
      <div>
        <h3>User's Name</h3>
        <h6>(User's Pronoun)</h6>
      </div>
      <img className="profPic" alt="usersPhoto" src={blank}></img>
      <h4>User's Tag Line</h4>
      <div className="matchBtns"><button className="skip">Skip</button>
      <button className="match">Match</button></div>
      <ul>
        <h4>User's Top 5</h4>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  )
};

export default Match;