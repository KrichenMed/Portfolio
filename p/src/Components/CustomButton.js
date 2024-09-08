import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import anime from "animejs/lib/anime.es.js"; // Import anime.js library
import downsvglight from "../Media/download-square-svgrepo-com light.svg";
import downsvgdark from "../Media/download-square-svgrepo-com dark.svg";
import seemorelight from "../Media/arrow-up-right-from-square-svgrepo-com light.svg";
import seemoredark from "../Media/arrow-up-right-from-square-svgrepo-com dark.svg";
import learnmoredark from "../Media/arrow-sm-right-svgrepo-com dark.svg";
import learnmorelight from "../Media/arrow-sm-right-svgrepo-com light.svg";
import emaildark from "../Media/email-svgrepo-com-dark.svg";
import emaillight from "../Media/email-svgrepo-com-light.svg";

const CustomButton = ({ text, isDarkTheme, onClick }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    anime({
      targets: buttonRef.current,
      scale: 1.1,
      duration: 200,
      easing: "easeInOutSine",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    anime({
      targets: buttonRef.current,
      scale: 1,
      duration: 200,
      easing: "easeInOutSine",
    });
  };

  return (
    <Button
      ref={buttonRef}
      variant={isDarkTheme ? "light" : "dark"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (onClick) onClick(); // Trigger the passed onClick handler
      }}
      style={{
        ...(text === "Lets Get In Touch Here" && {
          backgroundColor: "#ff5400",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
        }), // Exception style for this text
      }}
    >
      {text}
      {text === "Download Resume" && (
        <img
          style={{ marginLeft: "12px" }}
          src={isDarkTheme ? downsvgdark : downsvglight}
          alt=""
        />
      )}
      {text === "See Full Projects Archive" && (
        <img
          style={{ marginLeft: "12px" }}
          src={isDarkTheme ? seemorelight : seemoredark}
          alt=""
        />
      )}
      {text === "Learn More about me" && (
        <img
          style={{
            transition: isHovered ? "margin-left 0.3s ease" : "none",
            marginLeft: isHovered ? "25px" : "12px",
          }}
          src={isDarkTheme ? learnmorelight : learnmoredark}
          alt=""
        />
      )}
      {text === "Lets Get In Touch Here" && (
        <img
          style={{
            transition: isHovered ? "margin-left 0.3s ease" : "none",
            marginLeft: isHovered ? "30px" : "12px",
            width: "25px",
          }}
          src={isDarkTheme ? emaildark : emaildark}
          alt=""
        />
      )}
    </Button>
  );
};

export default CustomButton;
