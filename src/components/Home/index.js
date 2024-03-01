import React, { Component } from "react";
import "./index.css";
// import ConnectionItem from "../ConnectionItem";
import { FaFileExcel } from "react-icons/fa";

class Home extends Component {
  state = {
    sheetData: [],
  };

  render() {
    const { sheetData } = this.state;
    console.log(sheetData);
    return (
      <div className="home-container">
        <div className="title-description-container">
          <h1>
            Boost Confidence Privately: Anonymous One-to-One Mock Interviews for
            fresher
          </h1>
          <h2>
            Master MERN Stack Development: Personalized Feedback and Problem
            Solving Platform"
          </h2>

          <button type="button" className="view-button">
            <FaFileExcel size={18} className="icon" />
            <a
              className="view-anchor"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/spreadsheets/d/1ZNuXq-L4jM2VVDbhUuzSTSm7bcdaeSUphs5UpbsNE90/edit#gid=1333122849a"
            >
              Check Who Ready for the Interview
            </a>
          </button>
          <div className="form-container">
            <p className="form-title">Register Here For Mock Interview</p>
            <iframe
              title="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSe78-hWzIicYgNHWsyXFh9hbhibMUikgE8osJfFfF-iOE_Egg/viewform?embedded=true"
              width="640"
              height="1700px"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <strong>Interview Replays</strong>
              <ul>
                <li>System design mock interview</li>
                <li>Google mock interview</li>
                <li>Java mock interview</li>
                <li>Python mock interview</li>
                <li>Microsoft mock interview</li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <strong>Language/Company</strong>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Amazon</li>
                <li>Google</li>
                <li>Meta</li>
                <li>Apple</li>
                <li>Netflix</li>
                <li>Microsoft</li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <strong></strong>
              <strong>Popular Interview Questions</strong>
              <ul>
                <li>Reverse string</li>
                <li>Longest substring without repeating characters</li>
                <li>Longest common subsequence</li>
                <li>Container with most water</li>
                <li>Reverse linked list</li>
                <li>K closest points to origin</li>
                <li>Kth smallest element</li>
                <li>Reverse words in a string</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
