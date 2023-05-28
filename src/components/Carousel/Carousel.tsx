import { Carousel as CarouselAntd } from "antd";
import styles from "./styles.module.css";

type CarouselProps = {
  photos: Photo[];
};

const Carousel = ({ photos }: CarouselProps) => (
  <CarouselAntd className={styles.carousel} autoplay>
    {photos.map(({ id, alt_description, urls: { regular } }) => (
      <img
        key={id}
        src={regular}
        alt={alt_description}
        className={styles.image}
        data-testid="carousel-image"
      />
    ))}
  </CarouselAntd>
);

export default Carousel;
