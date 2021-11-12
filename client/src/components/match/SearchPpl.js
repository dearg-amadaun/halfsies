import React from 'react';
import { Link } from "react-router-dom";
import firebaseConfig from "../profile/config";
import MatchProfiles from '../match/MatchProfiles';
import Match from '../match/Match';

function SearchPpl() {

    const myArray = [MatchProfiles];

    return (
        <div>
        <div className="container">

            {myArray.map(name => (
                <li>
                    {Match}
                </li>
            ))}
        </div>
            <br />
            <br />
            <br />

            <div className="logout shadow">
                <Link to="/home">
                    <span>
                        <div onClick={() => firebaseConfig.auth().signOut()} className="logoutBtn shadow">Logout</div>
                    </span>
                </Link>
            </div>

        </div>
    );
}

export default SearchPpl;