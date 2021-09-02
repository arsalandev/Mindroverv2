import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import './css/dashboardanalysis.css'
import Data from './Data/mindRoverSingleData.json';
import { FaRegFilePdf } from "react-icons/fa";

const DashboardAnalysis = () => {
  return (
    <>
      <Container fluid>

            <Card className="dashboard-analysis-card">
              <div className="row">
                <div className="col-xxl-10">
                <Card.Img className="rounded" variant="top" src={Data[0].imageurl} />
                <Card.Body className="d-flex">
                <div className="content-area">
                <Card.Title>Image Caption</Card.Title>
                <Card.Text>
                      {Data[0].captionresult}
                    </Card.Text>
                </div>
              </Card.Body>
                </div>
                <div className="col-xxl-2 d-flex align-items-end my-4 justify-content-center">
                <FaRegFilePdf size="3em" />
                </div>
              </div>
              {/* <div className="img-area"><Card.Img className="rounded" variant="top" src={Data[0].imageurl} /></div> */}
              
            </Card>

      </Container>
    </>
  );
};

export default DashboardAnalysis;


