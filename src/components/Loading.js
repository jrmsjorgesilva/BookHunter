import React from "react";
import { Spring } from "react-spring/renderprops";
import loading from "../img/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props} className="wrapper">
          <div className="loading">
            <img src={loading} alt="carregando dados" />
            <h3>Carregando dados...</h3>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Loading;
