import { List as ListAntd, Typography } from "antd";
import styles from "./styles.module.css";

const { Paragraph } = Typography;

type ListProps = {
  photos: Photo[];
};

const List = ({ photos }: ListProps) => {
  return (
    <div className={styles.container}>
      <ListAntd
        itemLayout="vertical"
        size="large"
        dataSource={photos}
        className={styles.list}
        renderItem={(photo: Photo) => (
          <ListAntd.Item
            key={photo.id}
            extra={
              <img
                alt={photo.alt_description}
                src={photo.urls.regular}
                className={styles.image}
              />
            }
          >
            <div className={styles.description}>
              <Paragraph
                ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
              >
                {photo.description ?? photo.alt_description}
              </Paragraph>
            </div>
          </ListAntd.Item>
        )}
      />
    </div>
  );
};

export default List;
