import { useState } from "react";
import { Typography } from "antd";

import Carousel from "./components/Carousel";
import LayoutForm from "./components/LayoutForm";

import { useGallery } from "./hooks/useGallery";

import { Layout } from "./helpers/constants";
import "./App.css";

const { Title } = Typography;

const App = () => {
  const { photos } = useGallery();
  const [layout, setLayout] = useState(Layout.CAROUSEL);

  const render = {
    [Layout.CARD]: <div></div>,
    [Layout.CAROUSEL]: <Carousel photos={photos} />,
    [Layout.GRID]: <div></div>,
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
