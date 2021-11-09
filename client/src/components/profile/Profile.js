import React, { Component } from 'react'
import '../profile/profile.css'
import blank from '../images/blank.png';
import {
  Link
} from "react-router-dom";

class Profile extends Component {

  state = {
    isActive: false
  }

  handleShow = () => {
    this.setState({
      isActive: true
    })
  }

  handleHide = () => {
    this.setState({
      isActive: false
    })
  }
  render() {
    return (
      <div>
        <div className="profSettings">
          <div className="currentSettings" onClick={this.handleShow}>
            <div>
              <img src={blank} className="profPic" alt="myPic" />
            </div>
            <div>
              <form>
                <label>Name:</label><br />


                <label>
                  Email:</label><br />

                <label>
                  Password:</label><br />

                <label>
                  Pronoun:</label><br />

                <label>
                  Zipcode:</label><br />

                <label>
                  Radius:</label><br />

                <label>
                  Tagline:</label><br />
                <div>
                  <ul>
                    <h1>Top 5</h1>
                    <li>
                      <label>
                        1
                      </label>
                    </li>
                    <li>
                      <label>
                        2
                      </label>
                    </li>
                    <li>
                      <label>
                        3
                      </label>
                    </li>
                    <li>
                      <label>
                        4
                      </label>
                    </li>
                    <li>
                      <label>
                        5
                      </label>
                    </li>
                  </ul>
                  <div className="editBtnDiv shadow">
                    <Link to="/">
                      <span>
                        <div className="editBtn shadow">Edit</div>
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {this.state.isActive ? <div className="edit" onClick={this.handleHide}>
            <div>
              <img src={blank} className="profPic" alt="myPic" />
              <button>update photo</button>
            </div>
            <div>
              <form>
                <label>
                  <input className="shadow" type="text" name="name" />
                </label>
              </form>
              <form>
                <label>
                  <input className="shadow" type="text" name="email" />
                </label>
              </form>
              <form>
                <label>
                  <input className="shadow" type="text" name="password" />
                </label>
              </form>
              <form>
                <label>
                  <input className="shadow" type="text" name="pronoun" />
                </label>
              </form>
              <form>
                <label>
                  <input className="shadow" type="text" name="zipcode" />
                </label>
              </form>
              <form>
                <label>

                  <input className="shadow" type="text" name="radius" />
                </label>
              </form>
              <form>
                <label>

                  <input className="shadow" type="text" name="tagline" />
                </label>
              </form>
              <div>
                <ul>
                  <h1>top 5</h1>
                  <li>
                    <label>
                      <input className="shadow" type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input className="shadow" type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input className="shadow" type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input className="shadow" type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input className="shadow" type="text" name="radius" />
                    </label>
                  </li>
                </ul>
                <input className="shadow" type="submit" value="edit" />
              </div>
            </div>
          </div> : null}
          
        </div>
        <br/>
        <br/>
        <br/>
        
        <div className="logout shadow">
          <Link to="/home">
            <span>
              <div className="logoutBtn shadow">Logout</div>
            </span>
          </Link>
        </div>
      </div>

    )
  };
}


export default Profile;