import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import mypicture from "../Media/IMG_1824.JPG";
//import NeonSVG from "./NeonSVG";
import CustomButton from "./CustomButton";
//import ImageSVG from "./ImageSVG";
//import mypicturelight from "../Media/back-backward-development-svgrepo-com light.svg";
//import mypicturedark from "../Media/back-backward-development-svgrepo-com dark.svg";

const Grids = ({ isDarkTheme }) => {
  return (
    <Container>
      <section id="aboutme">
        <table style={{ marginTop: "150px" }}>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td colspan="2" rowspan="2">
                <div>
                  <h1>
                    <b>Mohamed KRICHENE</b>
                  </h1>
                  <h2 style={{ fontSize: "1.125rem" }}>
                    <b>
                      Fullstack web developer,
                      <br /> Researcher At ReDCAD Laboratory
                    </b>
                  </h2>
                  <p style={{ fontSize: "1rem" }}>
                    Crafting, developing, and streamlining the digital
                    experience:
                    <br /> Designing, constructing, and optimizing the Web.
                  </p>
                  <CustomButton
                    isDarkTheme={isDarkTheme}
                    text="Learn More about me"
                  />

                  <br />
                  <br />
                  <CustomButton
                    text="Download Resume"
                    isDarkTheme={isDarkTheme}
                  />
                </div>
              </td>
              <td colspan="3" rowspan="2">
                <Image src={mypicture} style={{ width: "260px" }} rounded />
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="experience"></section>
      <section id="Blog"></section>
      <section id="contact"></section>
      <br />
    </Container>
  );
};

export default Grids;
