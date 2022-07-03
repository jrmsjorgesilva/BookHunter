import React from "react";
import { useSpring, animated } from "react-spring";
import loading from "../img/gif/loading-arrow.gif";

const Loading = () => {

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  return (
    <animated.div style={props} className="wrapper">
      <div className="loading">
        <img src={loading} alt="carregando dados" />
        <h3>Carregando dados...</h3>
      </div>
    </animated.div>
  );
};

export default Loading;
