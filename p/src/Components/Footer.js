import React from "react";
import CountryDD from "./CountryDD";

const Footer = ({ isDarkTheme }) => {
  return (
    <footer className={`footer ${isDarkTheme ? "dark-text" : "light-text"}`}>
      <div className="footer-content">
        <span id={`footercopyright${isDarkTheme ? "-dark" : "-light"}`}>
          <b>2024 - PRESENT © Mohamed KRICHENE</b>
        </span>
        <p>
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            aria-label="visual studio code"
            target="_blank"
            rel="noreferrer"
            className={`footer-link${isDarkTheme ? "-dark" : "-light"}`}
          >
            Visual Studio Code
          </a>
          &nbsp;by yours truly. <br />
          Built with{" "}
          <a
            href="https://react.dev/"
            aria-label="Reactjs"
            target="_blank"
            rel="noreferrer"
            className={`footer-link${isDarkTheme ? "-dark" : "-light"}`}
          >
            React.js.
          </a>
          <br />
          All text is set in the{" "}
          <a
            href="https://fonts.google.com/specimen/Inter"
            className={`footer-link${isDarkTheme ? "-dark" : "-light"}`}
            aria-label="inter font"
            target="_blank"
            rel="noreferrer"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </div>
      <nav className={`footer-nav${isDarkTheme ? "-dark" : "-light"}`}>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/krichenmed"
              aria-label="github link"
              className={`footer-link${isDarkTheme ? "-dark" : "-light"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/mohamedkrichene"
              aria-label="linkedin link"
              className={`footer-link${isDarkTheme ? "-dark" : "-light"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/*
      <CountryDD />
      */}
    </footer>
  );
};

export default Footer;
