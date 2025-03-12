import { Col, Divider, Row } from "antd";
import "./App.css";
import { ApiResult } from "./components/api-result";

function App() {
  const functionEndpointCacheEnabled = import.meta.env.VITE_FUNCTION_ENDPOINT_CACHE_ENABLED as string;
  const functionEndpointCacheDisabled = import.meta.env.VITE_FUNCTION_ENDPOINT_CACHE_DISABLED as string;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Row>
        <h1>Front Door with Cached Enabled</h1>
        <br />
        <Row style={{ minHeight: "20vh", width: "100vw" }}>
          <Col span={8}>
            <h4>cache-control: private, no-store</h4>
            <ApiResult uri={functionEndpointCacheEnabled + "/privatenostore"} />
          </Col>
          <Col span={8}>
            <h4>cache-control: maxAge=20</h4>
            <ApiResult uri={functionEndpointCacheEnabled + "/maxage20"} />
          </Col>
          <Col span={8}>
            <h4>no cache hint</h4>
            <ApiResult uri={functionEndpointCacheEnabled + "/nocachehint"} />
          </Col>
          <Divider />
        </Row>

        <h1>Front Door with Cached Disabled</h1>
        <br />
        <Row style={{ height: "50vh", width: "100vw" }}>
          <Col span={8}>
            <h4>cache-control: private, no-store</h4>
            <ApiResult uri={functionEndpointCacheDisabled + "/privatenostore"} />
          </Col>
          <Col span={8}>
            <h4>cache-control: maxAge=20</h4>
            <ApiResult uri={functionEndpointCacheDisabled + "/maxage20"} />
          </Col>
          <Col span={8}>
            <h4>no cache hint</h4>
            <ApiResult uri={functionEndpointCacheDisabled + "/nocachehint"} />
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default App;
