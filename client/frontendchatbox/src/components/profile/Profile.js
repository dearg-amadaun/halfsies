import React, { Component } from 'react'
import '../profile/profile.css'
import blank from '../images/blank.png';


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
        <div className="profSettings">
          <div className="currentSettings" onClick={this.handleShow}>
            <div>
              <img src={blank} className="profPic" alt="myPic" />
            </div>
            <div>
              <form>
                <label>Name</label>
              </form>
              <form>
                <label>
                  Email</label>
              </form>
              <form>
                <label>
                  Password </label>
              </form>
              <form>
                <label>
                  Pronoun</label>
              </form>
              <form>
                <label>
                  Zipcode</label>
              </form>
              <form>
                <label>
                  Radius</label>
              </form>
              <form>
                <label>
                  Tagline</label>
              </form>
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
                <input type="submit" value="edit" />
              </div>
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
                  <input type="text" name="name" />
                </label>
              </form>
              <form>
                <label>
                  <input type="text" name="email" />
                </label>
              </form>
              <form>
                <label>
                  <input type="text" name="password" />
                </label>
              </form>
              <form>
                <label>
                  <input type="text" name="pronoun" />
                </label>
              </form>
              <form>
                <label>
                  <input type="text" name="zipcode" />
                </label>
              </form>
              <form>
                <label>

                  <input type="text" name="radius" />
                </label>
              </form>
              <form>
                <label>

                  <input type="text" name="tagline" />
                </label>
              </form>
              <div>
                <ul>
                  <h1>top 5</h1>
                  <li>
                    <label>
                      <input type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="text" name="radius" />
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="text" name="radius" />
                    </label>
                  </li>
                </ul>
                <input type="submit" value="edit" />
              </div>
            </div>
          </div> : null}
          <button>logout</button>
        </div>
      )
    };
  }


export default Profile;