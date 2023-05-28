import { Card, Typography } from "antd";
import styles from "./styles.module.css";

const { Meta } = Card;
const { Paragraph } = Typography;

type GridProps = {
  photos: Photo[];
  onlyImages?: boolean;
  cardHorizontal?: boolean;
};

const Grid = ({ photos, onlyImages, cardHorizontal }: GridProps) => {
  const renderImage = ({ id, urls, alt_description }: Photo) => (
    <img
      key={id}
      alt={alt_description}
      src={urls.regular}
      className={styles.image}
      data-testid="image"
    />
  );

  const renderCard = (photo: Photo) => {
    const { id, alt_description, description } = photo;

    return (
      <Card
        key={id}
        cover={renderImage(photo)}
        data-testid={cardHorizontal ? "card-horizontal" : "card-regular"}
        className={
          cardHorizontal ? styles.card_horizontal : styles.card_regular
        }
      >
        <Meta
          data-testid="description"
          className={styles.description}
          description={
            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
              {description ?? alt_description}
            </Paragraph>
          }
        />
      </Card>
    );
  };

  if (onlyImages) {
    return (
      <div className={styles.grid} data-testid="grid-only-images">
        {photos.map(renderImage)}
      </div>
    );
  }

  return (
    <div className={cardHorizontal ? styles.list : styles.grid}>
      {photos.map(renderCard)}
    </div>
  );
};

export default Grid;
