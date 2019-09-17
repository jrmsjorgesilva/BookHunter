import React from "react";
import { Spring } from "react-spring/renderprops";

const About = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div className="about-background">
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
        </div>
      )}
    </Spring>
  );
};

export default About;
