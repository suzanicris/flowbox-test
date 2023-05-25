import { Card, Image, Typography } from "antd";
import styles from "./styles.module.css";

const { Meta } = Card;
const { Paragraph } = Typography;

type GridProps = {
  photos: Photo[];
  asCard?: boolean;
};

const Grid = ({ photos, asCard }: GridProps) => {
  if (asCard) {
    return (
      <div className={styles.grid}>
        {photos.map((photo) => (
          <Card
            key={photo.id}
            className={styles.card}
            cover={
              <img
                alt={photo.alt_description}
                src={photo.urls.regular}
                className={styles.image}
              />
            }
          >
            <Meta
              description={
                <Paragraph
                  ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
                >
                  {photo.description ?? photo.alt_description}
                </Paragraph>
              }
            />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <Image.PreviewGroup>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <Image
            key={photo.id}
            width={400}
            alt={photo.alt_description}
            src={photo.urls.regular}
            className={styles.image}
          />
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default Grid;
