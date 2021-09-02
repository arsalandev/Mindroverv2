import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import Data from "./Data/mindRoverSingleData.json";
import "./css/analysiscards.css";

const AnalysisCards = () => {
  return (
    <>
      {/* <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            style={{ width: "350px" }}
            src={Data[0].imageurl}
          />

          <Card.Body>
            <Card.Title>Image</Card.Title>

            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            style={{ width: "350px" }}
            src={Data[0].colorimageurl.msg}
          />
          <Card.Body>
            <Card.Title>Color Image</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Data[0].labelimageurl.msg} />
          <Card.Body>
            <Card.Title>Label Image</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Data[0].platesimageurl.msg} />
          <Card.Body>
            <Card.Title>Plates Image</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}

      <Row className="justify-content-around">
        <Col xl={2} lg={4}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" src={Data[0].imageurl} />
            </div>
            <Card.Body className="overflow-detail">
              <Card.Title>Original Image</Card.Title>
              <Card.Text >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={2} lg={4}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" src={Data[0].colorimageurl.msg} />
            </div>
            <Card.Body className="overflow-detail">
              <Card.Title>Color Image</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={2} lg={4}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" src={Data[0].labelimageurl.msg} />
            </div>
            <Card.Body className="overflow-detail">
              <Card.Title>Label Image</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={2} lg={4}>
          <Card>
            <div className="features-pic">
              <Card.Img variant="top" src={Data[0].platesimageurl.msg} />
            </div>
            <Card.Body className="overflow-detail">
              <Card.Title>Plates Image</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col xl={2} lg={4}>
          <Card>
            <ListGroup variant="flush">
            <Card.Header>Upload Details</Card.Header>
              <ListGroup.Item>File Size: {Data[0].info_data.FileSize}</ListGroup.Item>
              <ListGroup.Item>Upload Time: {Data[0].info_data.UploadTime}</ListGroup.Item>
              <ListGroup.Item>Algorithm: {Data[0].info_data.Algorithm}</ListGroup.Item>
              <ListGroup.Item>Core type: {Data[0].info_data.CoreType}</ListGroup.Item>
              <ListGroup.Item>File Name: {Data[0].info_data.FileName}</ListGroup.Item>
              <Card.Header>Image Labels</Card.Header>
              <ListGroup.Item>Cars: {Data[0].labels.car} </ListGroup.Item>
              <ListGroup.Item>Truck: {Data[0].labels.truck}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

export default AnalysisCards;
