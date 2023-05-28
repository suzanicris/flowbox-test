import { useState } from "react";
import { Button, Result, Spin, Typography } from "antd";

import Carousel from "components/Carousel";
import Grid from "components/Grid";
import LayoutForm from "components/LayoutForm";

import { Layout } from "helpers/constants";
import { useGallery } from "hooks/useGallery";

import "./App.css";

const { Title } = Typography;

const App = () => {
  const { photos, loading, fail, useMock, toggleUseMock } = useGallery();
  const [layout, setLayout] = useState(Layout.CAROUSEL);

  const FailResult = () => (
    <Result
      status="error"
      title="Getting photos failed"
      extra={[
        <Button type="primary" key="console" onClick={toggleUseMock}>
          Render with mock
        </Button>,
      ]}
    />
  );

  const render = {
    [Layout.CARD]: <Grid photos={photos} />,
    [Layout.CAROUSEL]: <Carousel photos={photos} />,
    [Layout.GRID]: <Grid onlyImages photos={photos} />,
    [Layout.LIST]: <Grid cardHorizontal photos={photos} />,
  };

  return (
    <main className="main">
      <Title>Welcome!</Title>
      <LayoutForm onChange={setLayout} />

      <section>
        {!useMock && fail ? (
          <FailResult />
        ) : (
          <Spin spinning={loading} tip="Loading" size="large">
            {render[layout]}
          </Spin>
        )}
      </section>
    </main>
  );
};

export default App;
