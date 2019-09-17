import React from "react";
import { Spring } from "react-spring/renderprops";

const Loading = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props} className="wrapper">
          <div className="loading">
            <img src="../img/gif/loading-arrow.gif" alt="carregando dados" />
            <h3>Carregando dados...</h3>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Loading;
