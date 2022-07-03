import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Home = () => {

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  return (
    <animated.div style={props} className="box-layout">
      <div className="box-layout__box">
        {/* {process.env.API_KEY_NEW_YORK_TIMES} */}
        <Link to="/about">
          <h1> Read More &rarr; </h1>
        </Link>
      </div>
    </animated.div>
  );
};

export default Home;
