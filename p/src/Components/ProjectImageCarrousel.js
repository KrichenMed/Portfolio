import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../Media/EcommercePlatform1.png";
import ExampleCarouselImage2 from "../Media/EcommercePlatform2.png";
import ExampleCarouselImage3 from "../Media/EcommercePlatform3.png";
import ExampleCarouselImage4 from "../Media/EcommercePlatform4.png";
import ExampleCarouselImage5 from "../Media/E-commercePlatform5.png";

function ProjectImageCarrousel() {
  return (
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage1}
          alt="First slide"
          style={{
            borderRadius: "5px",
            height: "650px",
            width: "100%",
            objectFit: "cover", // Or 'contain' if you prefer no cropping
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "-2px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
          style={{
            borderRadius: "5px",
            height: "650px",
            width: "100%",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "-2px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
          style={{
            borderRadius: "5px",
            height: "650px",
            width: "100%",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "-2px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage4}
          alt="Fourth slide"
          style={{
            borderRadius: "5px",
            height: "650px",
            width: "100%",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "-2px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage5}
          alt="Fifth slide"
          style={{
            borderRadius: "5px",
            height: "650px",
            width: "100%",
            objectFit: "cover",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "-2px",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectImageCarrousel;
