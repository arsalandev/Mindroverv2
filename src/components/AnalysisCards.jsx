import React from "react";
import { Card, Col } from "react-bootstrap";
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

      
        <Col xl={3} lg={3} md={6} sm={12}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" style={{height: "100%", objectFit: "cover"}} src={Data[0].imageurl} />
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

        <Col xl={3} lg={3} md={6} sm={12}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" style={{height: "100%", objectFit: "cover"}} src={Data[0].colorimageurl.msg} />
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

        <Col xl={3} lg={3} md={6} sm={12}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" style={{height: "100%", objectFit: "cover"}} src={Data[0].labelimageurl.msg} />
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

        <Col xl={3} lg={3} md={6} sm={12}>
          <Card >
            <div className="features-pic">
              <Card.Img variant="top" style={{height: "100%", objectFit: "cover"}} src={Data[0].platesimageurl.msg} />
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

      {/* {Data.map((data, i) =>{
         <Card >
         <div className="features-pic">
           <Card.Img variant="top" style={{height: "100%", objectFit: "cover"}} src={data[0].imageurl} />
         </div>
         <Card.Body className="overflow-detail">
           <Card.Title>Original Image</Card.Title>
           <Card.Text >
             Some quick example text to build on the card title and make up
             the bulk of the card's content.
             
           </Card.Text>
         </Card.Body>
       </Card>
      })} */}
      
    </>
  );
};

export default AnalysisCards;
