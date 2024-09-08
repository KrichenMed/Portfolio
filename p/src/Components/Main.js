import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import mypicture from "../Media/PXL_20240422_190715874.PORTRAIT~2.jpg";
import CustomButton from "./CustomButton";
import JSImage from "../Media/js.gif";
import ReactJSImage from "../Media/reactJS.gif";
import HTMLImage from "../Media/HTML5logo.png";
import NodeImage from "../Media/Nodejs2.svg";
import MongoImage from "../Media/MongoDB.png";
import CsharpImage from "../Media/Csharp.png";
import PHPImage from "../Media/PHPLogo.png";
import CSSImage from "../Media/CSSLogo.png";
import MysqlImage from "../Media/MysqlLogo.png";
//import EcommerceProjectImage from "../Media/EcommercePlatform1.png";
import ProjectImageCarrousel from "./ProjectImageCarrousel";
//import HtmlSVG from "./HTMLSVG";
//import NeonSVG from "./NeonSVG";
//import { useState } from "react";
import { Carousel } from "react-bootstrap";
//import MyProjectsSVG from "./MyProjects";
//import CountryDD from "./CountryDD";
//import ImageSVG from "./ImageSVG";
//import mypicturelight from "../Media/back-backward-development-svgrepo-com light.svg";
//import mypicturedark from "../Media/back-backward-development-svgrepo-com dark.svg";

const Grids = ({ isDarkTheme }) => {
  const handleDownloadResume = () => {
    try {
      const resumeUrl =
        "https://raw.githubusercontent.com/KrichenMed/portfolio/main/p/src/Media/Mohamed%20Krichene09-09-2024.pdf"; // Ensure this URL is correct

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Mohamed_KRICHENE_Resume.pdf";

      // Append the anchor to the body (required for some browsers)
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the anchor after download is triggered
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to download the resume:", error);
      alert("There was an error downloading the resume. Please try again.");
    }
  };
  const handleMoreProjects = () => {
    window.open("https://github.com/KrichenMed", "_blank");
  };
  const handleComposeEmail = () => {
    window.location.href = "mailto:krichenmed99@gmail.com?";
  };

  return (
    <Container>
      <section id="aboutme" style={{}}>
        <div id="aboutmediv" style={{}}>
          <article id="aboutmeart" style={{}}>
            <header>
              <h1>
                <b>Mohamed KRICHENE</b>
              </h1>
              <h2 style={{ fontSize: "1.125rem" }}>
                Fullstack web developer,
                <br /> Researcher At ReDCAD Laboratory
              </h2>
            </header>
            <p style={{ fontSize: "1rem", maxWidth: "390px" }}>
              Crafting, developing, and streamlining the digital experience:
              Designing, constructing, and optimizing the Web.
            </p>
            <CustomButton
              isDarkTheme={isDarkTheme}
              text="Learn More about me"
            />
            <br style={{}} />
            <CustomButton
              text="Download Resume"
              isDarkTheme={isDarkTheme}
              onClick={handleDownloadResume}
            />
          </article>
          <aside>
            <svg
              className="svg-shape-layer"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 246.07 255.74"
              style={{
                backgroundColor: "antiquewhite",
                padding: "5px 10px 15px 20px",
                borderRadius: "5px",
              }}
              width="440"
              height="360"
            >
              {/* Define the custom shape in clipPath */}
              <clipPath id="customShape">
                <path d="M194,172.91a2.17,2.17,0,0,0,0-.36v-.76c.45-1.79,1-3.56,1.34-5.36,1-4.83,1.86-9.68,2.78-14.52l.39-2.25.35-1.14,0-.73.06-1a33.76,33.76,0,0,0,1.79-8c2-9.88,4-19.76,6-29.64,2.68-13.37,5.31-26.74,8-40.11.74-3.72,3-5.5,6.86-5.54l4.3-.07c1.75,0,3.5.08,5.25,0,2.61,0,4-1.21,4.53-3.8q4.73-23.55,9.43-47.11c.69-3.5-1.15-5.76-4.67-5.76H218.33c-3.53,0-4.86,1.07-5.54,4.49-1.15,5.75-2.34,11.48-3.4,17.24-.66,3.58-2.85,5.53-6.21,6.45-2.27.63-4.6.14-6.9.39-.56,0-1.12-.06-1.68-.06H81.54c-.5,0-1,0-1.5,0A17.32,17.32,0,0,0,64,48.68c-.69,3.29-1.3,6.6-2,9.91q-6.65,33.28-13.3,66.57-4.4,22-8.76,44-1.8,8.88-3.59,17.77c-3.66,18.19-7.36,36.38-11,54.59-2,10.25,5.6,20.23,15.83,20.58,6.42.23,12.86,0,19.29,0h40.85l22.9,0h16.49c6.3,0,12.61-.08,18.91.08a24.72,24.72,0,0,0,9.24-1.57A16.59,16.59,0,0,0,179,247.56c1.43-3.05,4-4,7.14-3.77l5.63,0c1.24,0,2.49.12,3.72,0a4.06,4.06,0,0,0,4-3.11,20.16,20.16,0,0,0,.91-5.12.63.63,0,0,0,.3-.73l.84-4.9c1.28-5.31,2.63-10.61,3-16.1,1.09-1.33.94-3,1.27-4.57,1.39-6.58,2.68-13.18,4-19.78,1-1.21,1.68-2.64,2.94-3.61l.4-.56v0c5-1.77,10.22-1.12,15.37-1.19,4.43-.06,8.87,0,13.3,0,3.65,0,5-1.16,5.76-4.76q4.56-23,9.14-46c.73-3.63-.93-6-4.6-6-7.61-.11-15.23-.09-22.85,0-2.85,0-4.23,1.33-4.79,4.07-.81,3.9-1.5,7.83-2.35,11.73-2.88,13.13-4.64,26.5-8.41,39.45a13.25,13.25,0,0,1-7,4.59c-4.13-.14-8.33.59-12.31-1.15a.81.81,0,0,0-.41-.71l-1.16-1.87c-.56-1.21-.3-2.5-.36-3.75a12,12,0,0,0,.75-3.75C194.06,175.05,193.32,173.8,194,172.91ZM36.86,66.81H26.18c-3.7,0-5.05,1.14-5.77,4.74q-4.56,23-9.15,46c-.76,3.81,1,6.07,4.93,6.09q11,0,21.94,0c3.42,0,4.82-1.28,5.48-4.64q4.56-23,9.16-46c.78-3.9-1-6.14-5-6.15Z" />
              </clipPath>

              {/* Apply the clipPath to the image */}
              <image
                className="svg-image"
                xlinkHref={mypicture} // The image source
                clipPath="url(#customShape)" // Applying the custom shape as clipPath
              />
            </svg>
            {/*<Image
              id="mypicturee"
              src={mypicture}
              mask="url(#svgmask1)"
              rounded
            />*/}
          </aside>
        </div>
      </section>
      <section id="experience">
        <section style={{ marginTop: "150px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 0 100%", textAlign: "center" }}>
              <h2 style={{ marginTop: "25px", fontSize: "2.25rem" }}>
                <b>My Projects</b>
              </h2>
              <p style={{ marginTop: "15px", fontSize: "1rem" }}>
                The best way to learn is to build stuff, so I build. I build
                with these technologies
              </p>
              <div className="logoimagewrapper">
                <Image className="logohoverImage" id="JSImage" src={JSImage} />
                <Image
                  className="logohoverImage"
                  id="ReactJSImage"
                  src={ReactJSImage}
                />
                <Image
                  className="logohoverImage"
                  id="MongoImage"
                  src={MongoImage}
                />
                <Image className="logohoverImage" id="" src={HTMLImage} />
                <Image className="logohoverImage" id="" src={NodeImage} />
                <Image className="logohoverImage" id="" src={PHPImage} />
                <Image className="logohoverImage" id="" src={CSSImage} />
                <Image
                  className="logohoverImage"
                  id="MysqlImage"
                  src={MysqlImage}
                  alt="MySQL Image"
                />
                <Image className="logohoverImage" id="" src={CsharpImage} />
              </div>
            </div>

            <div style={{ margin: "45px" }}>
              <h3>
                <b>Here is a brief example</b>
              </h3>
              <h4>
                <b>The E-commerce Project</b>
              </h4>
            </div>
            <ProjectImageCarrousel />
            <div
              style={{
                flex: "1 0 100%",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <CustomButton
                text="See Full Projects Archive"
                isDarkTheme={isDarkTheme}
                onClick={handleMoreProjects}
              />
            </div>
          </div>
        </section>
      </section>

      <section id="Contact">
        <div style={{ flex: "1 0 100%", textAlign: "center" }}>
          <div style={{ marginTop: "25px" }}></div>
          <CustomButton
            text="Lets Get In Touch Here"
            isDarkTheme={isDarkTheme}
            onClick={handleComposeEmail}
          />
        </div>
      </section>
      <br />
    </Container>
  );
};

export default Grids;
