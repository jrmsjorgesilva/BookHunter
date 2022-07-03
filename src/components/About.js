import React from "react";
import { useSpring, animated } from 'react-spring'

const About = () => {

  const { props } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 1 },
  })

  return (
    <animated.div className="about-background">
      <div style={props} className="about-intro">
        <div className="eng-message">
          <h1>
            Simple App using fetch to trace the list of bestseller books by
            the New york Times(And King's Reviews)
          </h1>
        </div>
        <div className="pt-br-message">
          <h1>
            App simples que busca a lista de mais vendidos do New York Times
            (Bem como os reviews de Stephen King)
          </h1>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
