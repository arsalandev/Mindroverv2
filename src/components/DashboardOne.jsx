import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DashboardAnalysis from "./DashboardAnalysis";
import MetricsResult from "./MetricsResult";
import AnalysisCards from "./AnalysisCards";


const Dashboardone = (props) => {

  const incomingData3 = props.sendingPictureData
  console.log("from dashboardone", incomingData3)

  return (
    <>
      <Container fluid>
        <div>
          <Row className="mt-3">
            <Col xl={5} lg={6} md={12} sm={12}>
              <DashboardAnalysis onlyImage={incomingData3}/>
            </Col>

            <Col xl={7} lg={6} md={12} sm={12}>
              <MetricsResult onlyMetrics={incomingData3}/>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-around px-3">
          <Row className="mt-4">
            <AnalysisCards />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dashboardone;
