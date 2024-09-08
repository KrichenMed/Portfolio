import React, { useEffect } from "react";
import anime from "animejs";

const CSharpLogo = () => {
  useEffect(() => {
    // Animation for paths
    anime({
      targets: ".csharp-logo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: (el, i) => i * 250,
      direction: "alternate",
      loop: true,
    });

    // Optional: Animate fill colors
    anime({
      targets: ".csharp-logo path",
      fill: [
        { value: "#9A5196", duration: 1000 },
        { value: "#7F3A86", duration: 1000 },
        { value: "#662579", duration: 1000 },
      ],
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <svg
      className="csharp-logo"
      width="200px"
      height="200px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.6947 22.9999C27.883 22.6617 28 22.2807 28 21.9385V10.0613C28 9.71913 27.8831 9.33818 27.6947 9L16 16L27.6947 22.9999Z"
        fill="#7F3A86"
      />
      <path
        d="M17.0395 29.7433L26.9611 23.8047C27.2469 23.6336 27.5067 23.3382 27.695 23L16.0003 16L4.30566 23C4.49398 23.3382 4.75382 23.6337 5.03955 23.8047L14.9611 29.7433C15.5326 30.0855 16.468 30.0855 17.0395 29.7433Z"
        fill="#662579"
      />
      <path
        d="M27.6947 8.99996C27.5064 8.6617 27.2465 8.36629 26.9608 8.19521L17.0392 2.25662C16.4677 1.91446 15.5323 1.91446 14.9608 2.25662L5.03922 8.19521C4.46761 8.53729 4 9.37709 4 10.0613V21.9386C4 22.2807 4.11694 22.6618 4.30533 23L16 16L27.6947 8.99996Z"
        fill="#9A5196"
      />
      <path
        d="M16.0385 24C11.6061 24 8 20.4112 8 16C8 11.5888 11.6061 8 16.0385 8C18.8458 8 21.4674 9.47569 22.919 11.8618L19.4765 13.9265C18.7492 12.736 17.4399 12 16.0385 12C13.8222 12 12.0193 13.7944 12.0193 16C12.0193 18.2056 13.8222 20 16.0385 20C17.4362 20 18.7421 19.2681 19.4707 18.0832L22.9205 20.1359C21.4692 22.5234 18.8467 24 16.0385 24Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.0001 13V13.9974H22.9999V13H22.0001V13.9974H21V15H22.0001V16.9948H21V18H22.0001V19H22.9999L23 18H25.0001V19H25.9999V18H27V17H25.9999V15H27V13.9974H25.9999V13H25.0001ZM25.0001 17V15H22.9999V16.9948L25.0001 17Z"
        fill="white"
      />
    </svg>
  );
};

export default CSharpLogo;
