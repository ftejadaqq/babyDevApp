import React, { Component } from "react";
import AccountButtons from "./accountButtons";
import "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="home-header">
          <svg width="50" height="50">
            <rect
              x="10"
              y="10"
              width="30"
              height="30"
              fill="rgb(252, 234, 99)"
            ></rect>
          </svg>
          <h1>montessori by month</h1>
        </header>
        <main>
          <div className="home-container">
            <div className="home-info">
              <h2>A baby development and toy guide</h2>

              <div className="home-info-pic-caption">
                <ul>
                  <li>0-24 months development timeline</li>
                  <li>Stage based toy/activity suggestions</li>
                </ul>
              </div>
            </div>
            <div className="home-login-signup">
              <AccountButtons />
            </div>
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default Home;
