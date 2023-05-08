import React from "react";
import SchlumpFood from "../images/schlump_food.jpg";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Schlumps Lazy Restaurant</h1>
      <p>
        We pride ourself with our lazy attitude towards making food. We make it
        as unstylish and unkept as possible for your maximal enjoyment
      </p>
      <img src={SchlumpFood} />
    </>
  );
};
