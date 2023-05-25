import { useState } from "react";
import { Typography } from "antd";

import LayoutForm from "components/LayoutForm";
import Carousel from "components/Carousel";
import Grid from "components/Grid";

import { Layout } from "helpers/constants";
import { useGallery } from "hooks/useGallery";

import "./App.css";

const { Title } = Typography;

const App = () => {
  const { photos } = useGallery();
  const [layout, setLayout] = useState(Layout.CAROUSEL);

  const render = {
    [Layout.CARD]: <Grid asCard photos={photos} />,
    [Layout.CAROUSEL]: <Carousel photos={photos} />,
    [Layout.GRID]: <Grid photos={photos} />,
    [Layout.LIST]: <div></div>,
  };

  return (
    <main className="main">
      <Title>Welcome!</Title>
      <LayoutForm onChange={setLayout} />
      <section className="gallery">{render[layout]}</section>
    </main>
  );
};

export default App;
