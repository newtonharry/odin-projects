import React from "react";
import Schleem from "../images/meal_1.jpg";
import Goop from "../images/meal_2.jpg";
import Sausage from "../images/meal_3.jpg";
import Plumbus from "../images/plumbus.webp";
import "./Menu.css";

export const Menu: React.FC = () => {
  return (
    <>
      <h1>Menu</h1>
      <div className="menu">
        <div className="menu-item">
          <h2>Schleem</h2>
          <p>Food which has been repurposed for later use</p>
          <img src={Schleem} />
        </div>
        <div className="menu-item">
          <h2>Plumbus</h2>
          <p>
            The plumbus dish will deliver maximal googlbop enjoyment to your
            noogle nips
          </p>
          <img src={Plumbus} />
        </div>
        <div className="menu-item">
          <h2>Lumpy Goop</h2>
          <p>
            Lumpy goop is one of our least digestible dishes which can cause
            severe pain and potentially death.
          </p>
          <img src={Goop} />
        </div>
        <div className="menu-item">
          <h2>Sausage Party</h2>
          <p>
            The sausage party dish is for those who are in a very falic mood and
            don't mind a bit of cereal.
          </p>
          <img src={Sausage} />
        </div>
      </div>
    </>
  );
};
