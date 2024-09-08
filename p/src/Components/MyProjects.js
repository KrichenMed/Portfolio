import React from "react";

function MyProjectsSVG() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 600 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#feb47b", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="none"
        stroke="url(#grad1)"
        strokeWidth="2"
        strokeDasharray="500"
        strokeDashoffset="500"
        fontSize="48"
        fontWeight="bold"
        style={{
          animation: "strokeAnimation 4s ease-in-out forwards",
        }}
      >
        My Projects
      </text>

      <style>
        {`
      @keyframes strokeAnimation {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}
      </style>
    </svg>
  );
}

export default MyProjectsSVG;

