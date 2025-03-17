import { Col, Row } from "antd";
import "./App.css";
import { ApiResult } from "./components/api-result";

function App() {
  const functionAppEndpoint = import.meta.env.VITE_FUNCTION_ENDPOINT as string;
  const aFDCacheEnabledEndpoint = import.meta.env.VITE_AFD_ENDPOINT_CACHE_ENABLED as string;
  const aFDCacheDisabledEndpoint = import.meta.env.VITE_AFD_ENDPOINT_CACHE_DISABLED as string;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Row>
        <Row style={{ minHeight: "20vh", width: "100vw" }}>
          <Col span={6}>
            <div style={{ textAlign: "center", height: "50px" }}>
              <h4>Directly to Function App</h4>
            </div>
            <ApiResult uri={functionAppEndpoint} />
          </Col>
          <Col span={6}>
            <div style={{ textAlign: "center", height: "50px" }}>
              <h4>Through AFD with Cache enabled</h4>
            </div>
            <ApiResult uri={aFDCacheEnabledEndpoint} />
          </Col>
          <Col span={6}>
            <div style={{ textAlign: "center", height: "50px" }}>
              <h4>Through AFD with Cache disabled by a rule set</h4>
            </div>
            <ApiResult uri={aFDCacheEnabledEndpoint} cacheDisabledThroughRuleSet={true} />
          </Col>
          <Col span={6}>
            <div style={{ textAlign: "center", height: "50px" }}>
              <h4>Through AFD with Cache Disabled</h4>
            </div>
            <ApiResult uri={aFDCacheDisabledEndpoint} />
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default App;
