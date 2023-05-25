import { Carousel as CarouselAntd } from "antd";
import styles from './styles.module.css'

const Carousel = ({ photos }: Photos) => (
  <CarouselAntd>
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
