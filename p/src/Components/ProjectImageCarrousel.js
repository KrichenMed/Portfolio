import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage1 from "../Media/EcommercePlatform1Edited.png";
import ExampleCarouselImage2 from "../Media/EcommercePlatform2Edited.png";
import ExampleCarouselImage3 from "../Media/EcommercePlatform3Edited.png";
import ExampleCarouselImage4 from "../Media/EcommercePlatform4Edited.png";
import ExampleCarouselImage5 from "../Media/E-commercePlatform5Edited.png";

function ProjectImageCarrousel() {
  return (
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage1}
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage4}
          alt="Fourth slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage5}
          alt="Fifth slide"
          
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectImageCarrousel;
