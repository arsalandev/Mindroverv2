import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import DashboardAnalysis from "./DashboardAnalysis";
import MetricsResult from "./MetricsResult";
import AnalysisCards from "./AnalysisCards";
// import RecentImages from "./RecentImages";

const Dashboardone = () => {
  return (
    <>
      <Container fluid>
        {/* <div>
    <RecentImages />
        </div> */}
        <div>
          <Row className="mt-3">
            <Col xl={5} lg={6} md={12} sm={12}>
              <DashboardAnalysis />
            </Col>

            <Col xl={7} lg={6} md={12} sm={12}>
              <MetricsResult />
            </Col>
          </Row>
        </div>

        <div>
          <Row className="mt-4">
            <AnalysisCards/>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dashboardone;
