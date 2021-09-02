import React, { useState } from "react";
import Typical from "react-typical";
import "./css/getstarted.css";
import { Figure, Row, Col, Button } from "react-bootstrap";
import { Particles } from "react-particles-js";
//import { tsParticles } from "tsparticles";

const GetStarted = () => {
  // const [object, setObject] = useState(false);
  // const [sentence, setSentence] = useState(false);

  return (
    <>
      <div className="bg-drop"></div>
      <div className="mycontainer">
        <Row className="justify-content-center">
          <Col xxl={3} xl={3} lg={3} md={1}>
          <div className="left_content">
                <Figure className="my-5">
                  <Figure.Image className="obj-det-left" alt="171x180" src="/images/newhome11.png" />
                </Figure>
                <div className="text-start">
                  <h2 className="text-typical">Object detection</h2>
                  <h4>
                    <Typical
                      steps={[
                        " 2 Windows",
                        1500,
                        " 3 Laptops",
                        1500,
                        " 4 Chairs",
                        1500,
                        " 7 Books",
                        1500,
                        "Worspace",
                        1500,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                      className="text-typical"
                    />
                  </h4>
                </div>
              </div>
            {/* {object ? (
              <div className="left_content">
                <Figure className="my-5">
                  <Figure.Image className="obj-det-left" alt="171x180" src="/images/newhome11.png" />
                </Figure>
                <div className="text-start">
                  <h2 className="text-typical">Object detection</h2>
                  <h4>
                    <Typical
                      steps={[
                        " 2 Windows",
                        1500,
                        " 3 Laptops",
                        1500,
                        " 4 Chairs",
                        1500,
                        " 7 Books",
                        1500,
                        "Worspace",
                        1500,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                      className="text-typical"
                    />
                  </h4>
                </div>
              </div>
            ) : null} */}
          </Col>

          <Col
            className="d-flex justify-content-center align-items-center"
            xxl={4}
            xl={4}
            lg={5}
            md={1}
          >
            <div className="card-home">
              <div>
                <Figure className="logo">
                  <Figure.Image
                    width={250}
                    height={200}
                    alt="nothing"
                    src="/images/mindroverlogo.png"
                  />
                </Figure>
              </div>

              <div className="mt-4">
                <button
                  size="lg"
                  className="left-button"
                  // onClick={() => setObject(true)}
                >
                  Object detection
                </button>
              </div>

              <div className="mt-4">
                <button
                  size="lg"
                  className="left-button"
                  // onClick={() => setSentence(true)}
                >
                  Sentence generation
                </button>
              </div>
            </div>
          </Col>

          <Col xxl={3} xl={3} lg={3} md={1}>
          <div className="right_content">
                <Figure className="my-5">
                  <Figure.Image className="obj-det-right" alt="171x180" src="/images/newhome21.png" />
                </Figure>
                <div className="text-start">
                  <h2 className="text-typical">Sentense generation</h2>
                  <h4>
                    <Typical
                      steps={[
                        " Office environment",
                        1500,
                        "Meeting room",
                        1500,
                        "Worspace",
                        1500,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                      className="text-typical"
                    />
                  </h4>
                </div>
              </div>
            {/* {sentence ? (
              <div className="right_content">
                <Figure className="my-5">
                  <Figure.Image className="obj-det-right" alt="171x180" src="/images/newhome21.png" />
                </Figure>
                <div className="text-start">
                  <h2 className="text-typical">Sentense generation</h2>
                  <h4>
                    <Typical
                      steps={[
                        " Office environment",
                        1500,
                        "Meeting room",
                        1500,
                        "Worspace",
                        1500,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                      className="text-typical"
                    />
                  </h4>
                </div>
              </div>
            ) : null} */}
          </Col>
        </Row>
      </div>

      <Particles
        className="myparticles"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </>
  );
};

export default GetStarted;
