import React from "react";
import { FaLinkedin } from "react-icons/fa";

import "./index.css";

export default function ConnectionItem() {
  return (
    <div className="connection-item">
      <div className="connection-profile">
        {/* <div className="connections">
          <h1>Connect</h1>
          <div className="connections-list">
            <ConnectionItem />
          </div>
        </div> */}

        <div className="logo">TA</div>
        <div className="connection-name-role">
          <h1 className="connection-name">#Name</h1>
          <p className="connection-role">#Role</p>
        </div>
      </div>
      <div className="intrested">
        <p>Frontend,MERN Full-stack</p>
        <p>HTML, CSS, Javascript, React, </p>
        <button type="button">
          <FaLinkedin size={48} />
        </button>
      </div>
    </div>
  );
}
