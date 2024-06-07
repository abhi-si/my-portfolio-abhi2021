import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import react1 from "../assets/react22.jpg";
import react2 from "../assets/js123.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I?</h1>
        <p>
          I am a front-end developer with a specialization in React, dedicated to crafting responsive, intuitive, and visually appealing websites. My expertise lies in translating design concepts into high-performance, user-friendly web applications that provide seamless experiences across all devices.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="top">
            <img src={react1} className="img" alt="React Image 1" />
          </div>
          <div className="bottom">
            <img src={react2} className="img" alt="React Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
