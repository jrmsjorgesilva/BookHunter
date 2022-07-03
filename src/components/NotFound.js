import React from "react";
import { useSpring, animated } from "react-spring";

const NotFound = () => {

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  return (
    <animated.div style={props} className="err-style">
      <div className="err-message">
        <h1>Sorry, page doesn't exist :/</h1>
      </div>
    </animated.div>
  );
};

export default NotFound;
