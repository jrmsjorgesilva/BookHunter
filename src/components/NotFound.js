import React from "react";
import { Spring } from "react-spring/renderprops";

const NotFound = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props} className="err-style">
          <div className="err-message">
            <h1>Sorry, page doesn't exist :/</h1>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default NotFound;
