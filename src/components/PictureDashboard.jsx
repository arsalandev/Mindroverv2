import React from "react";
import RecentImages from "./RecentImages";
import "./css/picturedashboard.css";
import { Container, Row, Button } from "react-bootstrap";

const PictureDashboard = () => {
  return (
    <>
      <Container fluid>
        <div className="picture-dashboard-body">

          {/* <div className="button-dashboard">
            <Button>Upload Images</Button>
          </div> */}

          <Row>
            <div className="pic-dash-slider">
              <RecentImages />
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default PictureDashboard;
