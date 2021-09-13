import React from "react";
import RecentImages from "./RecentImages";
import "./css/picturedashboard.css";
import { Container, Button } from "react-bootstrap";

const PictureDashboard = (props) => {

const savePictureData = (incomingData) =>{
  // console.log("from picture dashboard", incomingData);
  props.onSavePictureData2(incomingData);
};



  return (
    <>
      <Container fluid>
        <div className="picture-dashboard-body">
          <div className="button-dashboard">
            <Button className="btn btn-dark">
              <label htmlFor="file-input">Upload Images</label>
              <input style={{ display: "none" }} id="file-input" type="file" />
            </Button>
          </div>
          <div className="pic-dash-slider">
            <RecentImages onSavePictureData={savePictureData}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PictureDashboard;
