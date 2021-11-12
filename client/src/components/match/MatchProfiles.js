import React from "react";
import Match from "./Match";
import { Link } from "react-router-dom";
import firebaseConfig from "../profile/config";
import '../match/match.css';

const MatchProfiles = () => {
    return (
        <div className="matches">
            <Match
                name="Steve"
                about="I love tacos and great margaritas as well as the occaisional pizza and bottle of red!"
                favorites="Blue Corn, El Rey, Tequilas, Angelo's, Stella's"
                profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

            <Match
                name="Brendan"
                about="Love me a nice steak and rye old fashion on the rocks..."
                favorites="Barclay Prime, Blue Corn, Del Friscos, Butcher and Singer , Suraya"
                profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

            <Match
                name="Josh"
                about="Dessert before dinner is tottally okay right???"
                favorites="Max Brenner, Cheesecake Factory, Tequilas, Creme Brulee, Sweet Charlie's"
                profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />

            <Match
                name="Kim"
                about="gotta love a place a that knows how to make a good cocktail..."
                favorites="Tequilas, Randstead Room, Franklin Mortgage House, Zahav, Del Friscos"
                profilePic="https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg" />



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
};

export default MatchProfiles;