import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import anime from "animejs/lib/anime.es.js"; // Import anime.js library
import downsvglight from "../Media/download-square-svgrepo-com light.svg";
import downsvgdark from "../Media/download-square-svgrepo-com dark.svg";
import seemorelight from "../Media/arrow-up-right-from-square-svgrepo-com light.svg";
import seemoredark from "../Media/arrow-up-right-from-square-svgrepo-com dark.svg";
import learnmoredark from "../Media/arrow-sm-right-svgrepo-com dark.svg";
import learnmorelight from "../Media/arrow-sm-right-svgrepo-com light.svg";

const CustomButton = ({ text, isDarkTheme }) => {
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
            marginLeft: "12px",
            transition: isHovered ? "margin-left 0.3s ease" : "none",
            marginLeft: isHovered ? "25px" : "12px",
          }}
          src={isDarkTheme ? learnmorelight : learnmoredark}
          alt=""
        />
      )}
    </Button>
  );
};

export default CustomButton;
