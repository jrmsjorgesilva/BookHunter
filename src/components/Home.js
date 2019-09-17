import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

const Home = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props} className="box-layout">
          <div className="box-layout__box">
            {process.env.API_KEY_NEW_YORK_TIMES}
            <Link to="/about">
              <h1> Read More ></h1>
            </Link>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Home;
