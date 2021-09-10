import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./css/dashboardanalysis.css";
import Data from "./Data/mindRoverSingleData.json";
import Data2 from "./Data/mindRoverData.json";
import { FaRegFilePdf } from "react-icons/fa";

const DashboardAnalysis = () => {
  return (
    <>
      <Container fluid>
        <Card className="dashboard-analysis-card">
          <Row>
            <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
              <Card.Img
                className="rounded"
                variant="top"
                src={Data[0].imageurl}
              />
            </Col>
            <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
              <div className="d-flex justify-content-center">
                <img src={Data2[0].imagesUrls[1]} height={50} width={50} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
              <Card.Body className="d-flex">
                <div className="content-area">
                  <Card.Title>Image Caption</Card.Title>
                  <Card.Text>{Data[0].captionresult}</Card.Text>
                </div>
              </Card.Body>
            </Col>
            <Col
              xxl={2}
              xl={2}
              lg={2}
              md={2}
              sm={2}
              className="my-4 d-flex align-items-end justify-content-center"
            >
              <div>
                <label htmlFor="file-input">
                  <FaRegFilePdf size="3em" />
                </label>
                <input
                  style={{ display: "none" }}
                  id="file-input"
                  type="file"
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default DashboardAnalysis;
