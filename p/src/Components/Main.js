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
        <table style={{ marginTop: "150px", flexDirection: "row" }}>
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
          </tbody>
        </table>
      </section>
      <section id="experience">
        <table style={{ marginTop: "150px", flexDirection: "row" }}>
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
              <td></td>
              <td colspan="2">
                <h2 style={{ marginTop: "25px", fontSize: "2.25rem" }}>
                  <b>My Projects</b>
                  <br />
                  <p style={{ marginTop: "15px", fontSize: "1rem" }}>
                    The best way to learn is to build stuff, so I build.
                  </p>
                </h2>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="2">
                <h2>
                  <b>1st Project</b>
                </h2>
                <p>Project details</p>
              </td>
              <td colspan="2">
                <h2>
                  <b>2nd Project</b>
                </h2>
                <p>Project details</p>
              </td>
              <td colspan="2">
                <h2>
                  <b>3rd Project</b>
                </h2>
                <p>Project details</p>
              </td>
            </tr>
            <tr>
              <td colspan="6" style={{ textAlign: "center" }}>
                <CustomButton
                  text="See Full Projects Archive"
                  isDarkTheme={isDarkTheme}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="Blog">
        <table style={{ marginTop: "150px", flexDirection: "row" }}>
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
              <td colspan="6"></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">w1</td>
              <td colspan="2">w2</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">w3</td>
              <td colspan="2">w4</td>
              <td></td>
            </tr>
            <tr>
              <td colspan="6">Experience</td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">e1</td>
              <td colspan="2">e2</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">e3</td>
              <td colspan="2">e4</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">e5</td>
              <td colspan="2">e6</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="contact">
        <table style={{ marginTop: "150px", flexDirection: "row" }}>
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
              <td colspan="6">lien + contact</td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">map</td>
              <td colspan="2">form</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <br />
    </Container>
  );
};

export default Grids;
