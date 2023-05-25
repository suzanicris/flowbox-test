import { Carousel as CarouselAntd } from "antd";
import "./style.css";

const Carousel = ({ photos }: Photos) => (
  <CarouselAntd>
    {photos.map(({ id, alt_description, urls: { regular } }) => (
      <img key={id} src={regular} alt={alt_description} className="image" data-testid="carousel-image" />
    ))}
  </CarouselAntd>
);

export default Carousel;
