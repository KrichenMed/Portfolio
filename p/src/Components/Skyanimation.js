import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import "../Media/Skyanimation.css"; // Assuming your CSS is in this file

class SkyAnimation extends Component {
  state = {
    num: 200,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
  };

  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  };

  randomRadius = () => Math.random() * 0.7 + 0.6;

  getRandomX = () =>
    Math.floor(Math.random() * Math.floor(this.state.vw)).toString();

  getRandomY = () =>
    Math.floor(Math.random() * Math.floor(this.state.vh)).toString();

  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }

  render() {
    const { num } = this.state;
    return (
      <div id="App">
        <svg id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </svg>
        <div id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <div
              key={y}
              className="wish"
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SkyAnimation;
